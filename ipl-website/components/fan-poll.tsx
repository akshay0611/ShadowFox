"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function FanPoll() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)

  // Sample poll data
  const pollQuestion = "Who will be Mumbai Indians' MVP this season?"
  const pollOptions = [
    { id: "option1", text: "Rohit Sharma", votes: 45 },
    { id: "option2", text: "Jasprit Bumrah", votes: 32 },
    { id: "option3", text: "Suryakumar Yadav", votes: 28 },
    { id: "option4", text: "Ishan Kishan", votes: 15 },
  ]

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0)

  const handleVote = () => {
    if (selectedOption) {
      setHasVoted(true)
      // In a real app, you would send this vote to your backend
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{pollQuestion}</h3>

      {!hasVoted ? (
        <div className="space-y-4">
          <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
            {pollOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id} className="text-white">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <Button
            onClick={handleVote}
            disabled={!selectedOption}
            className="w-full bg-white text-blue-900 hover:bg-gray-100"
          >
            Vote Now
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {pollOptions.map((option) => {
            const percentage = Math.round(
              ((option.votes + (option.id === selectedOption ? 1 : 0)) / (totalVotes + 1)) * 100,
            )

            return (
              <div key={option.id} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{option.text}</span>
                  <span>{percentage}%</span>
                </div>
                <div className="w-full bg-blue-950 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full ${option.id === selectedOption ? "bg-white" : "bg-blue-400"}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            )
          })}

          <div className="text-sm text-center text-blue-200">Total votes: {totalVotes + 1}</div>

          <Button
            variant="outline"
            onClick={() => {
              setHasVoted(false)
              setSelectedOption(null)
            }}
            className="w-full border-white text-white hover:bg-blue-800"
          >
            Back to Poll
          </Button>
        </div>
      )}
    </div>
  )
}

