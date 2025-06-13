"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, CreditCard, Shield, Clock } from "lucide-react"

export default function StartPage() {
  const [selectedPlan, setSelectedPlan] = useState("full-service")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Start Your Career Acceleration</h1>
          <p className="text-xl text-gray-300">One final step to transform your job search</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plan Summary */}
          <div>
            <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/50 mb-6">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                  Full Service Bundle
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>100+ applications/month</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Custom resumes</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Dedicated coach</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Interview coaching</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Offer negotiation</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>LinkedIn optimization</span>
                  </div>
                </div>

                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-300">Total Investment:</span>
                    <span className="text-2xl font-bold text-white">$2,997</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">+ Success fee only when you get hired</p>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-green-400 mb-2" />
                <span className="text-sm text-gray-300">30-Day Guarantee</span>
              </div>
              <div className="flex flex-col items-center">
                <CreditCard className="w-8 h-8 text-blue-400 mb-2" />
                <span className="text-sm text-gray-300">Secure Payment</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-purple-400 mb-2" />
                <span className="text-sm text-gray-300">Start Immediately</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Complete Your Order</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">
                        First Name
                      </Label>
                      <Input id="firstName" className="bg-slate-700 border-slate-600 text-white" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">
                        Last Name
                      </Label>
                      <Input id="lastName" className="bg-slate-700 border-slate-600 text-white" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-slate-700 border-slate-600 text-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <Label className="text-gray-300 mb-3 block">Payment Method</Label>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="cardNumber" className="text-gray-300">
                          Card Number
                        </Label>
                        <Input
                          id="cardNumber"
                          className="bg-slate-700 border-slate-600 text-white"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="text-gray-300">
                            Expiry
                          </Label>
                          <Input id="expiry" className="bg-slate-700 border-slate-600 text-white" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvc" className="text-gray-300">
                            CVC
                          </Label>
                          <Input id="cvc" className="bg-slate-700 border-slate-600 text-white" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold">
                    Complete Order - $2,997
                  </Button>
                </form>

                <div className="text-center text-sm text-gray-400">
                  <p>🔒 Your payment information is secure and encrypted</p>
                  <p className="mt-2">By completing this order, you agree to our Terms of Service and Privacy Policy</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
