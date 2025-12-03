import { User, Event, Category } from '@/types';
import { getAvatarUrl } from './utils';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'BENJI',
    bio: 'Research, ETH, Content Creator',
    avatar: getAvatarUrl('BENJI'),
    categories: ['Biz Devs', 'Backend Devs'],
    social: { twitter: 'x.com/benji_eth' },
    location: { lat: 37.7749, lng: -122.4194 },
    events: ['1', '2'],
    matchCount: 241
  },
  {
    id: '2',
    name: 'oXQIUQIU',
    bio: 'Builder, Nomad, Thailand lover',
    avatar: getAvatarUrl('oXQIUQIU'),
    categories: ['Designers', 'Crypto VCs'],
    social: { twitter: 'x.com/oxqiuqiu' },
    location: { lat: 37.7850, lng: -122.4294 },
    events: ['1', '3'],
    matchCount: 288
  },
  {
    id: '3',
    name: 'Pablos',
    bio: 'Community Manager, Builder, Friendly',
    avatar: getAvatarUrl('Pablos'),
    categories: ['Biz Devs', 'Designers'],
    social: { twitter: 'x.com/pablos_web3' },
    location: { lat: 37.7649, lng: -122.4094 },
    events: ['2', '4'],
    matchCount: 156
  },
  {
    id: '4',
    name: 'GERSON',
    bio: 'Developer, ZK Builder',
    avatar: getAvatarUrl('GERSON'),
    categories: ['Backend Devs'],
    social: { twitter: 'x.com/gerson_zk' },
    location: { lat: 37.7849, lng: -122.4394 },
    events: ['1', '2', '5'],
    matchCount: 312
  },
  {
    id: '5',
    name: 'JesseyBellak',
    bio: 'BUIDL, Venture Capital, CEO',
    avatar: getAvatarUrl('JesseyBellak'),
    categories: ['Crypto VCs', 'Biz Devs'],
    social: { twitter: 'x.com/jesseybellak', linkedin: 'linkedin.com/in/jesseybellak' },
    location: { lat: 37.7949, lng: -122.4194 },
    events: ['3', '4'],
    matchCount: 445
  },
  {
    id: '6',
    name: 'DrewAMB',
    bio: 'Builder, Developer, Content Creator',
    avatar: getAvatarUrl('DrewAMB'),
    categories: ['Backend Devs', 'Designers'],
    social: { twitter: 'x.com/drewamb' },
    location: { lat: 37.7749, lng: -122.4094 },
    events: ['1', '5'],
    matchCount: 189
  },
  {
    id: '7',
    name: 'Xixi',
    bio: 'Growth Partner of Boommenemro',
    avatar: getAvatarUrl('Xixi'),
    categories: ['Biz Devs', 'Crypto VCs'],
    social: { twitter: 'x.com/odyssey_leexixi' },
    location: { lat: 37.7649, lng: -122.4294 },
    events: ['2', '3'],
    matchCount: 267
  },
  {
    id: '8',
    name: 'Mahdieh',
    bio: 'Smart Contract Dev, Community Builder',
    avatar: getAvatarUrl('Mahdieh'),
    categories: ['Backend Devs', 'Designers'],
    social: {
      twitter: 'x.com/mahdieh_amiri1',
      instagram: 'instagram.com/mahdieh_amiri1',
      telegram: 't.me/mahdieh_eth',
      linkedin: 'linkedin.com/in/mahdieh-amiri-blockchain'
    },
    location: { lat: 37.7849, lng: -122.4194 },
    events: ['1', '2', '4'],
    matchCount: 523
  },
  {
    id: '9',
    name: 'Koila',
    bio: 'Fraction',
    avatar: getAvatarUrl('Koila'),
    categories: ['Crypto VCs'],
    social: { twitter: 'x.com/koila_fraction' },
    location: { lat: 37.7550, lng: -122.4350 },
    events: ['1'],
    matchCount: 241
  },
  {
    id: '10',
    name: 'Hazard Franz',
    bio: 'OpenSource Contributor',
    avatar: getAvatarUrl('Hazard Franz'),
    categories: ['Backend Devs', 'Designers'],
    social: { twitter: 'x.com/hazardfranz' },
    location: { lat: 37.7650, lng: -122.4250 },
    events: ['2', '5'],
    matchCount: 288
  },
  {
    id: '11',
    name: 'Haseeb',
    bio: 'MP of Dragonfly',
    avatar: getAvatarUrl('Haseeb'),
    categories: ['Crypto VCs', 'Biz Devs'],
    social: { twitter: 'x.com/haseeb_vc' },
    location: { lat: 37.7750, lng: -122.4150 },
    events: ['3', '4'],
    matchCount: 241
  },
  {
    id: '12',
    name: 'Arthur Hayes',
    bio: 'Co-Founder of BitMEX',
    avatar: getAvatarUrl('Arthur Hayes'),
    categories: ['Crypto VCs'],
    social: { twitter: 'x.com/cryptohayes' },
    location: { lat: 37.7850, lng: -122.4050 },
    events: ['1', '3'],
    matchCount: 900
  },
  {
    id: '13',
    name: 'Vitalik',
    bio: 'Ethereum Co-Founder',
    avatar: getAvatarUrl('Vitalik'),
    categories: ['Backend Devs', 'Biz Devs'],
    social: { twitter: 'x.com/vitalikbuterin' },
    location: { lat: 37.7749, lng: -122.4194 },
    events: ['1', '3'],
    matchCount: 1500
  },
  {
    id: '14',
    name: 'Satoshi',
    bio: 'Bitcoin Creator',
    avatar: getAvatarUrl('Satoshi'),
    categories: ['Backend Devs'],
    social: { twitter: 'x.com/satoshi' },
    location: { lat: 37.7849, lng: -122.4294 },
    events: ['1'],
    matchCount: 2000
  },
  {
    id: '15',
    name: 'Alice',
    bio: 'DeFi Researcher, Protocol Designer',
    avatar: getAvatarUrl('Alice'),
    categories: ['Biz Devs', 'Designers'],
    social: { twitter: 'x.com/alice_defi', linkedin: 'linkedin.com/in/alice-defi' },
    location: { lat: 37.7649, lng: -122.4094 },
    events: ['2', '4'],
    matchCount: 356
  },
  {
    id: '16',
    name: 'Bob',
    bio: 'Smart Contract Auditor',
    avatar: getAvatarUrl('Bob'),
    categories: ['Backend Devs'],
    social: { twitter: 'x.com/bob_auditor' },
    location: { lat: 37.7949, lng: -122.4194 },
    events: ['4', '5'],
    matchCount: 412
  },
  {
    id: '17',
    name: 'Charlie',
    bio: 'NFT Artist, Creative Director',
    avatar: getAvatarUrl('Charlie'),
    categories: ['Designers'],
    social: { twitter: 'x.com/charlie_nft', instagram: 'instagram.com/charlie_art' },
    location: { lat: 37.7749, lng: -122.4094 },
    events: ['1', '6'],
    matchCount: 278
  },
  {
    id: '18',
    name: 'Diana',
    bio: 'Web3 Marketing Lead',
    avatar: getAvatarUrl('Diana'),
    categories: ['Biz Devs'],
    social: { twitter: 'x.com/diana_web3', linkedin: 'linkedin.com/in/diana-marketing' },
    location: { lat: 37.7849, lng: -122.4394 },
    events: ['1', '2', '3'],
    matchCount: 389
  },
  {
    id: '19',
    name: 'Eve',
    bio: 'Blockchain Developer, Solidity Expert',
    avatar: getAvatarUrl('Eve'),
    categories: ['Backend Devs'],
    social: { twitter: 'x.com/eve_solidity', telegram: 't.me/eve_dev' },
    location: { lat: 37.7550, lng: -122.4350 },
    events: ['2', '4', '5'],
    matchCount: 445
  },
  {
    id: '20',
    name: 'Frank',
    bio: 'VC Partner, Web3 Investor',
    avatar: getAvatarUrl('Frank'),
    categories: ['Crypto VCs', 'Biz Devs'],
    social: { twitter: 'x.com/frank_vc', linkedin: 'linkedin.com/in/frank-investor' },
    location: { lat: 37.7650, lng: -122.4250 },
    events: ['3', '4'],
    matchCount: 567
  },
  {
    id: '21',
    name: 'Grace',
    bio: 'UI/UX Designer, Web3 Enthusiast',
    avatar: getAvatarUrl('Grace'),
    categories: ['Designers'],
    social: { twitter: 'x.com/grace_design', instagram: 'instagram.com/grace_ui' },
    location: { lat: 37.7750, lng: -122.4150 },
    events: ['1', '6'],
    matchCount: 234
  },
  {
    id: '22',
    name: 'Henry',
    bio: 'Protocol Engineer, Rust Developer',
    avatar: getAvatarUrl('Henry'),
    categories: ['Backend Devs'],
    social: { twitter: 'x.com/henry_rust' },
    location: { lat: 37.7850, lng: -122.4050 },
    events: ['2', '5'],
    matchCount: 312
  },
  {
    id: '23',
    name: 'Iris',
    bio: 'Community Builder, Event Organizer',
    avatar: getAvatarUrl('Iris'),
    categories: ['Biz Devs'],
    social: { twitter: 'x.com/iris_community', telegram: 't.me/iris_events' },
    location: { lat: 37.7749, lng: -122.4194 },
    events: ['1', '2', '3', '6'],
    matchCount: 456
  },
  {
    id: '24',
    name: 'Jack',
    bio: 'Security Researcher, Bug Bounty Hunter',
    avatar: getAvatarUrl('Jack'),
    categories: ['Backend Devs'],
    social: { twitter: 'x.com/jack_security' },
    location: { lat: 37.7849, lng: -122.4294 },
    events: ['4'],
    matchCount: 289
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Invisible Garden',
    category: 'Web3',
    thumbnail: 'https://picsum.photos/seed/event1/400/400',
    location: 'San Francisco',
    matchCount: 821,
    attendees: ['1', '4', '6', '8', '13', '15', '17', '18', '21', '23']
  },
  {
    id: '2',
    name: 'Dev3Pack',
    category: 'Web3',
    thumbnail: 'https://picsum.photos/seed/event2/400/400',
    location: 'San Francisco',
    matchCount: 799,
    attendees: ['1', '3', '7', '8', '10', '15', '19', '22', '23']
  },
  {
    id: '3',
    name: 'Devconnect',
    category: 'Web3',
    thumbnail: 'https://picsum.photos/seed/event3/400/400',
    location: 'Istanbul',
    matchCount: 8971,
    attendees: ['2', '5', '7', '11', '12', '13', '18', '20', '23']
  },
  {
    id: '4',
    name: 'DeFi Security 101',
    category: 'Study',
    thumbnail: 'https://picsum.photos/seed/event4/400/400',
    location: 'Online',
    matchCount: 890,
    attendees: ['3', '5', '8', '11', '15', '16', '19', '20', '24']
  },
  {
    id: '5',
    name: 'Staking Summit',
    category: 'Web3',
    thumbnail: 'https://picsum.photos/seed/event5/400/400',
    location: 'Miami',
    matchCount: 547,
    attendees: ['4', '6', '10', '16', '19', '22']
  },
  {
    id: '6',
    name: 'SheFi Summit',
    category: 'Web3',
    thumbnail: 'https://picsum.photos/seed/event6/400/400',
    location: 'New York',
    matchCount: 214,
    attendees: ['6', '8', '17', '21', '23']
  }
];

export const mockCategories: Category[] = [
  { id: '1', name: 'Biz Devs', icon: 'Briefcase', matchCount: 1240 },
  { id: '2', name: 'Backend Devs', icon: 'Code', matchCount: 890 },
  { id: '3', name: 'Crypto VCs', icon: 'TrendingUp', matchCount: 456 },
  { id: '4', name: 'Designers', icon: 'Palette', matchCount: 678 }
];

// Current user for profile page
export const currentUser = mockUsers.find(u => u.id === '8')!;


