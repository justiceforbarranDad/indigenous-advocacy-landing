import React from 'react';
import { AlertCircle, Heart, CheckCircle, Clock, Shield } from 'lucide-react';

interface TimelineEvent {
  year: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  imageCaption?: string;
  icon: React.ReactNode;
  color: string;
  status: 'past' | 'critical' | 'ongoing';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2014-2021',
    date: 'Years of Silence',
    title: 'Ignored Reports & System Failure',
    description: 'Multiple signalements filed with DPJ since 2014. Complaints to government commissioners ignored. Eight years of domestic violence witnessed by children. No intervention. No protection.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_Z0Z5EB_image_blurred_4ce86e8f.png',
    imageCaption: 'Childhood innocence - before the system failed',
    icon: <AlertCircle className="w-6 h-6" />,
    color: 'bg-gray-600',
    status: 'past'
  },
  {
    year: '2021',
    date: 'February 14, 2021',
    title: 'The Attack: Stabbed Three Times',
    description: 'Barran is stabbed three times in the left lung, chest, and back. Six days hospitalized at Montreal Children\'s Hospital. Chest tube for three days. Medical staff save his life. His first words: "I miss my siblings."',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_R7Nc5x_image_blurred_df41ed37.png',
    imageCaption: 'Life begins anew after trauma',
    icon: <Heart className="w-6 h-6" />,
    color: 'bg-red-600',
    status: 'critical'
  },
  {
    year: '2021',
    date: 'Post-Hospital Recovery',
    title: 'Shriners Hospital Support',
    description: 'Trudy Wong and the Shriners Hospital team provide medical care and advocacy. They listen. They document. They prepare to escalate to DPJ. An organization provides gaming computer to support recovery.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_gtFlxD_image_blurred_44d2b93a.png',
    imageCaption: 'Hope after hospital - organizational support',
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-blue-600',
    status: 'past'
  },
  {
    year: '2021-2023',
    date: 'Two Years of Limbo',
    title: 'DPJ Involvement Without Action',
    description: 'DPJ becomes involved but provides inadequate support. Education disrupted. Mental health deteriorates. Jordan\'s Principle ignored. Family continues seeking help with no real progress.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_hSszDN_image_blurred_55817d16.png',
    imageCaption: 'Childhood joy - what should have been protected',
    icon: <Clock className="w-6 h-6" />,
    color: 'bg-orange-600',
    status: 'past'
  },
  {
    year: '2023',
    date: 'January 2023',
    title: 'DPJ Withdraws Without Follow-Up',
    description: 'DPJ suddenly withdraws without adequate follow-up plan. No transition support. No mental health services. No education plan. System abandons family again.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_KcddPM_image_blurred_df4b8c5a.png',
    imageCaption: 'Family bond - fractured by system failure',
    icon: <AlertCircle className="w-6 h-6" />,
    color: 'bg-red-700',
    status: 'critical'
  },
  {
    year: '2023-2026',
    date: 'Ongoing Fight',
    title: 'Public Advocacy & Accountability',
    description: 'Escalated to federal MPs, provincial ministers, CDPDJ, Protecteur du citoyen. Public campaign demanding independent inquiry. Jordan\'s Principle application. Real support for Barran and siblings.',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663438870618/AHjdMzisGBtTsV22ZEw3x9/pasted_file_i2KFrB_image_blurred_661be14d.png',
    imageCaption: 'Drumming - artistic expression continues',
    icon: <CheckCircle className="w-6 h-6" />,
    color: 'bg-green-600',
    status: 'ongoing'
  }
];

export default function BarransTimeline() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12 px-4 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Timeline of Failure & Fight
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From ignored reports to attempted murder to ongoing advocacy. This is the journey of a family fighting for justice. Photos show what was lost and what continues.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-300 via-red-500 to-green-600 transform md:-translate-x-1/2"></div>

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-white border-4 transform -translate-x-3.5 md:-translate-x-4 md:-translate-y-1 rounded-full flex items-center justify-center z-10">
                  <div className={`w-4 h-4 rounded-full ${event.color} flex items-center justify-center text-white`}>
                    {event.status === 'critical' ? (
                      <AlertCircle className="w-3 h-3" />
                    ) : event.status === 'ongoing' ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`bg-white rounded-lg shadow-lg p-6 border-l-4 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    event.status === 'critical' ? 'border-red-600' :
                    event.status === 'ongoing' ? 'border-green-600' :
                    'border-gray-400'
                  }`}>
                    {/* Year badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-bold ${event.color}`}>
                        {event.year}
                      </span>
                      <span className="text-xs text-gray-500 font-semibold">{event.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Status indicator */}
                    <div className="flex items-center gap-2 text-sm font-semibold">
                      {event.status === 'critical' && (
                        <span className="text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" /> Critical Moment
                        </span>
                      )}
                      {event.status === 'ongoing' && (
                        <span className="text-green-600 flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" /> Ongoing Fight
                        </span>
                      )}
                      {event.status === 'past' && (
                        <span className="text-gray-600 flex items-center gap-1">
                          <Clock className="w-4 h-4" /> Historical
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image */}
                {event.image && (
                  <div className={`mt-6 md:mt-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="relative rounded-lg overflow-hidden shadow-lg h-64 md:h-72 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                      <img
                        src={event.image}
                        alt={event.imageCaption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <p className="text-white text-sm md:text-base font-semibold">
                          {event.imageCaption}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-16 bg-gray-100 rounded-lg p-6 border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding the Timeline</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <div className="w-4 h-4 rounded-full bg-red-600 flex-shrink-0 mt-1"></div>
              <div>
                <p className="font-bold text-gray-900">Critical Moments</p>
                <p className="text-sm text-gray-700">Pivotal events that changed everything</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-4 h-4 rounded-full bg-blue-600 flex-shrink-0 mt-1"></div>
              <div>
                <p className="font-bold text-gray-900">Support Received</p>
                <p className="text-sm text-gray-700">Moments of help and advocacy</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-4 h-4 rounded-full bg-green-600 flex-shrink-0 mt-1"></div>
              <div>
                <p className="font-bold text-gray-900">Ongoing Fight</p>
                <p className="text-sm text-gray-700">Current efforts for justice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
