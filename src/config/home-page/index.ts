import Jisoo from '/public/images/customers/jisoo.jpg'
import Jame from '/public/images/customers/jame.png'
import QuanlityIcon from '/public/icons/hight-quanlity-icon.svg'
import Protection from '/public/icons/protection-icon.svg'
import Shipping from '/public/icons/shipping-icon.svg'
import Support from '/public/icons/support-icon.svg'

export const FUTURE = [
  {
    title: 'High Quality',
    content: 'Crafted from top materials',
    img: QuanlityIcon.src
  },
  {
    title: 'Warrany Protection',
    content: 'Over 2 years',
    img: Protection.src
  },
  {
    title: 'Free Shipping',
    content: 'Order over 150 $',
    img: Shipping.src
  },
  {
    title: '24 / 7 Support',
    content: 'Dedicated support',
    img: Support.src
  },
]
export const WHAT_CLIENT_SAY = [
  {
    index:0,
    star: 5,
    avatar:
    Jame.src,
    username: "James K.",
    comment:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    carrer: "Traveler",
  },
  {
    index:1,
    star: 5,
    avatar: Jisoo.src,
    username: "Jisoo",
    comment:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    carrer: "Singer",
  },
  {
    index:2,
    star: 5,
    avatar: Jame.src,
    username: "Jame",
    comment:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    carrer: "Singer",
  },
  // {
  //   star: 5,
  //   avatar: Jisoo.src,
  //   username: "Jisoo",
  //   comment:
  //     "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
  //   carrer: "Singer",
  // },
]
export interface WhatClientSay {
  index:number
  star: number
  username: string
  comment: string
  avatar: string
  carrer: string
}
