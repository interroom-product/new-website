"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function SocialProof() {
  const videoTestimonials = [
    {
      id: "cuEY5oeFA8A",
      title: "How InterRoom helped me land my dream job",
      author: "Michael Ta",
    },
    {
      id: "OrMFGgFWBd8",
      title: "From job search struggle to success",
      author: "Sarah Benson",
    },
    {
      id: "wfHVOOrf6ps",
      title: "InterRoom transformed my career trajectory",
      author: "Mithun Majunatha",
    },
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 font-light">See how we've helped others land their dream jobs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gray-100 relative">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-ir-primary mb-2">+44%</div>
            <p className="text-gray-600">Average Salary Increase</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-ir-primary mb-2">8%</div>
            <p className="text-gray-600">Interview Response Rate</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-ir-primary mb-2">2x</div>
            <p className="text-gray-600">Faster Job Placement</p>
          </div>
        </div>
      </div>
    </section>
  )
}
