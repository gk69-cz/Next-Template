import React from 'react'

const About = () => {
    return (
        <>

            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-semibold mb-6">About Us</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-6">At [Your Web Application Name], our mission is to [describe your primary goal or objective]. We believe in [core values or principles that guide your work]. With a focus on [specific aspect of your service], we aim to [impact or benefit your users].</p>

                        <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
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
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-2">We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, don't hesitate to reach out to us.</p>
                    <p className="text-gray-700">Email: [Your contact email] | Phone: [Your contact phone number] | Address: [Your office address, if applicable]</p>
                </div>
            </div>

        </>

    )
}

export default About