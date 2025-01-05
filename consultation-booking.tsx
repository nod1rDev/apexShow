'use client'

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface FormData {
  firstName: string
  lastName: string
  email: string
  guestEmails: string
  companyName: string
  website: string
  headcount: string
  source: string
  details: string
  phoneNumber: string
  selectedDate: Date | undefined
  selectedTime: string
}

const HEADCOUNT_OPTIONS = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1000+"
]

const SOURCE_OPTIONS = [
  "Google",
  "Social Media",
  "Referral",
  "Other"
]

export default function ConsultationBooking() {
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    guestEmails: "",
    companyName: "",
    website: "",
    headcount: "",
    source: "",
    details: "",
    phoneNumber: "",
    selectedDate: undefined,
    selectedTime: ""
  })

  const timeSlots = [
    "00:00", "02:00", "19:00", "19:30", "20:00", "20:30", "21:00"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Google Forms submission URL - replace with your form URL
    const GOOGLE_FORM_URL = 'YOUR_GOOGLE_FORM_URL'
    
    try {
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'entry.000000001': formData.firstName,
          'entry.000000002': formData.lastName,
          // Add all other form fields here with their corresponding entry IDs
        })
      })
      
      if (response.ok) {
        alert('Booking submitted successfully!')
        setStep(1)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          guestEmails: "",
          companyName: "",
          website: "",
          headcount: "",
          source: "",
          details: "",
          phoneNumber: "",
          selectedDate: undefined,
          selectedTime: ""
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your booking. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#f9f4e8] text-[#1f1f1f] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Book your free{" "}
            <span className="text-blue-600">consultation</span>
          </h1>
          <p className="text-lg">
            Learn how we help companies skyrocket productivity
            <br />
            through custom automations and systems
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          {step === 1 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 4L12 20M4 12L20 12" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold">Axe Automation</h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">
                    Automation Discovery Call
                  </h3>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    30 min
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">If you are looking to:</p>
                    <ul className="space-y-2 list-disc list-inside text-gray-600">
                      <li>Scale your company with automations and systems</li>
                      <li>Reduce your workload</li>
                      <li>Improve your margins</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Select a Date & Time
                </h3>
                <Calendar
                  mode="single"
                  selected={formData.selectedDate}
                  onSelect={(date) => setFormData(prev => ({ ...prev, selectedDate: date }))}
                  className="rounded-md border mb-4"
                />
                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-3">Available time slots</h4>
                  <ScrollArea className="h-[180px]">
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={formData.selectedTime === time ? "default" : "outline"}
                          onClick={() => setFormData(prev => ({ ...prev, selectedTime: time }))}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </ScrollArea>
                </div>

                {formData.selectedDate && formData.selectedTime && (
                  <Button 
                    className="w-full mt-6"
                    onClick={() => setStep(2)}
                  >
                    Continue
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="guestEmails">Guest Email(s)</Label>
                <Input
                  id="guestEmails"
                  name="guestEmails"
                  type="text"
                  placeholder="Separate multiple emails with commas"
                  value={formData.guestEmails}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Your Website</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="headcount">What is your company headcount? *</Label>
                <Select 
                  value={formData.headcount}
                  onValueChange={(value) => handleSelectChange('headcount', value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    {HEADCOUNT_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="source">How did you hear about us? *</Label>
                <Select
                  value={formData.source}
                  onValueChange={(value) => handleSelectChange('source', value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select source" />
                  </SelectTrigger>
                  <SelectContent>
                    {SOURCE_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Please share details on what you want to automate</Label>
                <Textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <PhoneInput
                  country={'uz'}
                  value={formData.phoneNumber}
                  onChange={(phone) => handlePhoneChange(phone)}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true
                  }}
                  containerClass="flex"
                  inputClass="flex-grow p-2 text-base border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  buttonClass="bg-gray-100 border border-gray-300 rounded-l-md px-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button type="submit">
                  Submit Booking
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

