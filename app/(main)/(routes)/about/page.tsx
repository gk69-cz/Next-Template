import { Heading } from '@/components/component/heading'
import { BookOpenText } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <>
        <Heading
        title="About"
        description='WHO, WHY, HOW'
        icon={BookOpenText}
        iconColor='text-blue-500'
        bgColor='bg-blue-500/10'
      />

            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-6">In Airwise, this website is part of a larger portfolio showcasing my own work. It does not rely on APIs; instead, it utilizes JSON data generated from Python scripts. As one of 10 websites in the portfolio, its purpose is to highlight my projects and expertise.</p>

                        <h2 className="text-xl font-semibold mb-4">What this site Offer</h2>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>Real-Time Flight Tracking: Track flight paths and get live updates on flight locations.</li>
                            <li>Interactive Map Integration: View flights on an interactive map, pinpointing their current locations.</li>
                            <li>Flight Booking: Book flight tickets directly through our platform with ease and convenience.</li>
                            <li>Personalized Alerts: Receive personalized alerts for flight status updates, delays, and more.</li>
                            <li>Flight Data Analytics: Access comprehensive flight data analytics for informed decision-making.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Our Story</h2>
                        <p className="text-gray-700 mb-6">Founded in [year of establishment], [Your Web Application Name] started as a [brief history or background of your project]. Since then, we have grown into [current status or achievements]. Our journey has been filled with challenges, learning experiences, and most importantly, the support of our incredible community.</p>

                        <h2 className="text-xl font-semibold mb-4">Meet the Creator</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center mb-4">
                                <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mr-3">C</div>
                                <div>
                                    <h3 className="text-lg font-semibold">Christy Zachariah</h3>
                                    <p className="text-gray-700">Web Developer</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h2 className="text-xl font-semibold mb-4">Hire Me</h2>
                    <p className="text-gray-700 mb-2">Ready to bring your project to life? Let us discuss how I can help you achieve your goals.</p>
                    <p className="text-gray-700">Email: [Your email address] | Phone: [Your phone number] | Portfolio: [Link to your portfolio or website]</p>
                </div>
            </div>

        </>

    )
}

export default About