"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';
import { Activity, Award, Heart, ShieldCheck, Smile, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "hero" },
              { name: "About Us", id: "services" },
              { name: "Results", id: "results" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Your Dent Clinic"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            title="Let's Make Your Smile Shine"
            description="See real results from our clients. Book your appointment with Egypt's trusted cosmetic dentistry experts."
            buttons={[{ text: "Book your appointment", href: "#contact" }]}
            testimonials={[
              {
                name: "Amira Ahmed",                handle: "@amira.a",                testimonial: "My smile transformation was incredible! Highly recommend Your Dent Clinic.",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-adult-woman-dentist_23-2148396159.jpg"
              },
              {
                name: "Mostafa Hassan",                handle: "@mostafa.h",                testimonial: "Professional and caring staff. The results exceeded my expectations.",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/joyful-beautiful-blonde-woman-wearing-white-shirt-standing-co-working-space-leaning-desk_74855-15168.jpg"
              },
              {
                name: "Layla Mahmoud",                handle: "@layla.m",                testimonial: "They made me feel comfortable and confident throughout my treatment.",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/male-doctor-talking-patient-showing-dental-jaw_23-2147862033.jpg"
              },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/positive-dreamy-young-lady-with-hand-cheek_23-2148054963.jpg"
            imageAlt="Smiling lady after dental treatment"
            showDimOverlay={true}
            showBlur={true}
            textPosition="bottom"
          />
        </div>

        <div id="services" data-section="services">
          <TextAbout
            tag="About Us"
            title="Our Commitment to Your Perfect Smile: Experienced Dental Care for Lasting Results."
            buttons={[{ text: "Discover Our Story", href: "#hero" }]} 
            buttonAnimation="slide-up"
            useInvertedBackground={true}
          />
        </div>

        <div id="results" data-section="results">
          <ProductCardTwo
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
            products={[
              { id: "p1", brand: "Fillings ", name: "Fillings ", price: "Before/After", rating: 5, reviewCount: "120", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dtkuli0tdBMKGcMqSnb5gG6iWC/uploaded-1779115214695-cymy6yrc.jpg" },
              { id: "p2", brand: "Whitening", name: "Teeth whitining ", price: "Before/After", rating: 5, reviewCount: "98", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dtkuli0tdBMKGcMqSnb5gG6iWC/uploaded-1779115233436-x0lug7g6.jpg" },
              { id: "p3", brand: "Braces", name: "Braces ", price: "Before/After", rating: 5, reviewCount: "156", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Dtkuli0tdBMKGcMqSnb5gG6iWC/uploaded-1779115434119-iog12a8j.jpg" },
              { id: "p4", brand: "Fillings", name: "Case Study 4", price: "Before/After", rating: 5, reviewCount: "84", imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-woman-making-frame-gesture_1262-1764.jpg" },
              { id: "p5", brand: "Cosmetic", name: "Case Study 5", price: "Before/After", rating: 5, reviewCount: "112", imageSrc: "http://img.b2bpic.net/free-photo/front-close-view-young-girl-smiling-pink_179666-1708.jpg" },
              { id: "p6", brand: "Smile Design", name: "Case Study 6", price: "Before/After", rating: 5, reviewCount: "140", imageSrc: "http://img.b2bpic.net/free-photo/positive-dreamy-young-lady-with-hand-cheek_23-2148054963.jpg" },
            ]}
            title="Client Transformations"
            description="Real life results from our cosmetic dental treatments."
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardOne
            animationType="slide-up"
            textboxLayout="split"
            gridVariant="bento-grid"
            useInvertedBackground={true}
            metrics={[
              { id: "m1", value: "100", title: "Happy Patients", description: "Successfully treated patients across Egypt.", icon: Smile },
              { id: "m2", value: "10+", title: "Years Experience", description: "Deep expertise in cosmetic dentistry.", icon: Award },
              { id: "m3", value: "4.9/5", title: "Google Reviews", description: "Highly trusted by our local community.", icon: Star },
            ]}
            title="Proven Excellence"
            description="Our clinic metrics speak to our quality and trust."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve
            useInvertedBackground={false}
            cardAnimation="slide-up"
            cardTitle="Patient Feedback"
            cardTag="Testimonials"
            testimonials={[
              { id: "t1", name: "Amira Ahmed", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-adult-woman-dentist_23-2148396159.jpg" },
              { id: "t2", name: "Mostafa Hassan", imageSrc: "http://img.b2bpic.net/free-photo/joyful-beautiful-blonde-woman-wearing-white-shirt-standing-co-working-space-leaning-desk_74855-15168.jpg" },
              { id: "t3", name: "Layla Mahmoud", imageSrc: "http://img.b2bpic.net/free-photo/male-doctor-talking-patient-showing-dental-jaw_23-2147862033.jpg" },
              { id: "t4", name: "Omar Khaled", imageSrc: "http://img.b2bpic.net/free-photo/smiley-nurse-with-stethoscope_23-2148740054.jpg" },
              { id: "t5", name: "Sara Ali", imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-dentist-with-patient-dental-clinic_662251-2616.jpg" },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitMedia
            textboxLayout="split"
            useInvertedBackground={true}
            faqs={[
              { id: "f1", title: "Is cosmetic dentistry safe?", content: "Yes, our advanced procedures meet the highest safety standards." },
              { id: "f2", title: "How much do veneers cost?", content: "Costs vary based on your personal needs; contact us for a consultation." },
              { id: "f3", title: "Do you offer international booking?", content: "Yes, we welcome patients globally for dental tourism." },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/full-equiped-medical-cabinet_1303-23918.jpg"
            title="Common Questions"
            description="Answers to help you feel confident in your decision."
            faqsAnimation="slide-up"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Contact Us"
            title="Book Your Appointment"
            description="Get in touch at yourdentclinic@gmail.com or +20 1008889978. Address: Abrag Othman, Maadi, Cairo."
            imageSrc="http://img.b2bpic.net/free-photo/portrait-hospital-receptionist-standing-front-desk_482257-131181.jpg"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Your Dent Clinic"
            copyrightText="© 2025 | Your Dent Clinic Egypt"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}