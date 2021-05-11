import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Lessons from '../components/Lessons'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div class="container mx-auto py-5 mt-1 px-6 md:px-14 md:px-10">
                <div class="relative">
                    <p class="title font-extrabold text-secondary-1 text-3xl">View Course</p>
                    <a href="#" class="back-btn text-sm text-primary-light z-10"><span class="hidden md:block">Back to Courses </span><img src="/arrow.png" alt="►" class="cursor-pointer" /></a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-5 mt-1">
                    <Course title="Economics of Leadership" image="/lesson1.jpg" layout="full"/>
                    <Lessons />
                </div>
                <div class="relative">
                    <p class="title2 font-extrabold text-secondary-1 text-3xl">Available Courses</p>
                    <a href="#" class="back-btn text-sm text-primary-light z-10"><span class="hidden md:block">View all Courses </span><img src="/arrow.png" alt="►" class="cursor-pointer" /></a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5 mt-1">
                    <Course title="Force Training Essentials" image="/lesson2.jpg" layout="thumbnail" />
                    <Course title="Bounty Hunter Planning" image="/lesson3.jpg" layout="thumbnail" />
                    <Course title="Effective Management" image="/lesson4.jpg" layout="thumbnail" />
                    <Course title="Mandalore Goals" image="/lesson5.jpg" layout="thumbnail" />
                </div>
            </div>
        </div>
    )
}
