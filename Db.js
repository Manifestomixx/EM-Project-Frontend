import pancake from "./src/assets/pancake.png";
import abstract from "./src/assets/abstract.png";
import Neon from "./src/assets/neon.png";
import Earth from "./src/assets/earth.png";
import Hausa from "./src/assets/hausa.png";
import Girl from "./src/assets/girl.png";
import Tunnel from "./src/assets/tunnel.png";
import Woman from "./src/assets/friend.png";
import Woman2 from "./src/assets/woman3.png";
import Guy from "./src/assets/woman4.png";
import Guy2 from "./src/assets/guy3.png";
import heartred from "./src/assets/heart.png";
import heartempty from "./src/assets/heart-empty.png";
import messagesicon from "./src/assets/messages-2.png";
import sendicon from "./src/assets/send-icon.png";
import moon from "./src/assets/moon.png";
import manpic from "./src/assets/manpic.png";
import flower from "./src/assets/flower.png";
import hallway from "./src/assets/hallway.png";
import apartment from "./src/assets/apartment.png";
import mountain from "./src/assets/mountain.png";
import Idris from "./src/assets/idris.png";
import Elena from "./src/assets/Elena.png";
import Cynthia from "./src/assets/cynthia.png";


// home data
export const data = [
  {
    id: 1,
    title: "Yuji Itadori",time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image: pancake,
    profile:  Woman ,statusbar:"Following", icon:heartred,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 2,
    title: "Naogami Shinya",time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image:  abstract ,
    profile: Woman2 ,statusbar:"Follow +", icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 3,
    title: "Gama Oyabin",time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image:  Neon ,
    profile: Guy ,statusbar:"Following", icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 4,
    title: "Senju Hashirama",time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image: Earth ,
    profile: Guy2 ,statusbar:"Follow +", icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },
];
console.log(data);

// friends data
export const FriendsData = [
  {
    id: 1,
    title: "Yuji Itadori",
    time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image:  moon,
    profile: Woman,
    statusbar: "Following",
    icon:heartred,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 2,
    title: "Yuji Itadori",
    time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image: Hausa,
    profile: Woman ,
    statusbar: "Follow +",
    icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 3,
    title: "Yuji Itadori",
    time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image: Girl,
    profile: Woman,
    statusbar: "Following",
    icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 4,
    title: "Yuji Itadori",
    time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image: Tunnel,
    profile: Woman,
    statusbar: "Follow +",
    icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },]


  // profile data
export const ProfileData = [
  {
    id: 1,
    title: "John Doe",
    time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image:  flower,
    profile: manpic,
    icon:heartred,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 2,
    title: "John Doe",
    time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image: hallway,
    profile: manpic ,
    icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 3,
    title: "John Doe",
    time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image: apartment,
    profile: manpic,
    icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 4,
    title: "John Doe",
    time:"8 mins ago",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi lacus neque fermentum vivamus orci. Lorem consectetur neque sit sociis turpis quisque. Auctor ullamcorper quam sit mattis posuere pulvinar molestie dignissim. Pulvinar tincidunt convallis sem congue. Tortor ac suscipit cum.",
    image: mountain,
    profile: manpic,
    icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },
];

// comment data

export const comments = [
  {
    id: 1,
    title: "Idris Santa",
    time:"8 mins ago",
    statusbar: "Follow +",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit in mauris consequat sed euismod vitae egestas diam. Diam fames in morbi egestas. Sit fermentum nisi.",
    
    profile: Idris,
    icon:heartred,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 2,
    title: "Elena Port",
    time:"12 mins ago",
    statusbar: "Following",
    description:
      "Lorem ipsum dolor sit amet consectetur.",
    
    profile: Elena ,
    icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },
  {
    id: 3,
    title: "Cynthia Morgan",
    time:"45 mins ago",
    statusbar: "Follow +",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit in mauris consequat sed euismod vitae egestas diam. Diam fames in morbi egestas. Sit fermentum nisi maecenas blandit posuere at sit.",
    profile: Cynthia,
    icon:heartempty,icon2:messagesicon,icon3:sendicon,
  },
]



