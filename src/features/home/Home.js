import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from './homeSlice';

import { FaLongArrowAltRight } from "react-icons/fa";

import CarBillboard from '../.././assets/images/car-billboard.png'
import LandingPage from '../.././assets/images/landing-page.jpg'

const people = [
  {
    name: 'Paul Ivan Dela Cruz',
    role: 'Co-Founder / CEO',
    imageUrl: 'https://i.pinimg.com/1200x/7f/ce/cd/7fcecd2ac31c1b39cb113222a8b79106.jpg',
  },
  {
    name: 'Bennzell M. Arguilles',
    role: 'Co-Founder / CTO',
    imageUrl: 'https://i.pinimg.com/736x/75/af/94/75af94787edf3296575372a012dec803.jpg',
  },
  {
    name: 'Joshed R. Cruz',
    role: 'Co-Founder / Director',
    imageUrl: 'https://img.wattpad.com/474f32d56f87499ef87cd6aa63616738ae69cd62/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5f4a326f7a535a6576394d4371773d3d2d313135393835343435312e313662643964663234646665636435653638393631343630343233332e6a7067?s=fit&w=720&h=720',
  },
  {
    name: 'Erika Mae O. Gime',
    role: 'Chief Marketing Officer',
    imageUrl: 'https://i.pinimg.com/736x/b3/d6/09/b3d609edc90c0b34e7ee0a13549966b3.jpg',
  },
  {
    name: 'Hikaru L. Oyama',
    role: 'Chief Strategy Officer',
    imageUrl: 'https://thicc-af.mywaifulist.moe/waifus/kuronuma-sawako/T2IGJOpW1n4lHaV9y59iZH3yjIHZOHviORCWduHL.jpg?class=thumbnail',
  },
]

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '₱44 million' },
  { id: 2, name: 'Assets under holding', value: '₱119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const state = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function Home() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <>
    <div className="h-[90vh] relative isolate overflow-hidden">
    <img
          src={LandingPage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover md:object-center"
        />
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="justify-center font-primary text-4xl font-bold tracking-tight text-white sm:text-8xl">
              Your Dream Car is Finally Here!
            </h1>
            <p className="mt-4 text-xl text-white">
              This year, our new car collection will satisfy you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <a
                href="/products"
                className="font-primary text-xl inline-block rounded-md bg-white px-8 py-3 text-center font-medium text-black hover:bg-gray-200"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="bg-white rounded-lg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the world&#39;s most car company&#39;s
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://www.carlogos.org/car-logos/honda-logo-2000-full-download.png"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://pngimg.com/d/lamborghini_PNG10709.png"
            alt="Reform"
            width={180}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://www.carlogos.org/logo/Lincoln-logo-2012-1920x1080.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://1000logos.net/wp-content/uploads/2018/04/Jeep-Logo-1970-1.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://logos-world.net/wp-content/uploads/2020/04/Toyota-Logo.png"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Leaders</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to SuperWheels, where precision engineering meets driving passion and your premier destination for quality vehicles and exceptional service.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative isolate overflow-hidden sm:py-32">
        <img
          src={CarBillboard}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Be Part of Us!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              SuperWheels can do partnership in any places with other dealership companies in the Philippines.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {state.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>          
    </>
  );
}
