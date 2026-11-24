// Everything the page says lives in this file. Edit a line, add a badge or a
// section here and the page picks it up on save.

/** A small inline chip with an optional 16px icon from /public/badges. */
export interface Badge {
  label: string;
  href?: string;
  /** Path under /public, e.g. '/badges/uwaterloo.png'. */
  icon?: string;
  /** The org's colour. Tints the chip's background and border. */
  tint?: string;
  /** A lighter tint for dark mode, for colours that are too dark to read (Laurier purple). */
  darkTint?: string;
  /** A backing colour for icons that are white on transparent, so they show in light mode. */
  iconBg?: string;
}

/** A green highlighted chip, like "S27 internships". */
export interface Highlight {
  hl: string;
  href?: string;
}

/** One bullet: plain text mixed with badges and highlights. */
export type Line = (string | Badge | Highlight)[];

export interface Section {
  heading: string;
  lines: Line[];
  /** Extra bullets tucked into a dropdown under the main ones. */
  more?: { label: string; lines: Line[] };
  /** Show the GitHub language bar at the end of this section. */
  languages?: boolean;
}

const email = 's48alam@uwaterloo.ca';

export const profile = {
  name: 'Suad Alam',
  /** Browser tab title and search description. */
  title: 'Suad Alam',
  description:
    'Suad Alam studies Math + Business at Waterloo and Laurier, and makes Roblox games, iOS apps and web apps.',
  email,
  links: [
    { label: 'github', href: 'https://github.com/suadalam' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/suadalam/' },
    { label: 'devpost', href: 'https://devpost.com/suadalam2020' },
  ],
};

const game = (placeId: string) => `https://www.roblox.com/games/${placeId}`;

// Every badge used on the page, defined once.
export const b = {
  uwaterloo: {
    label: 'University of Waterloo',
    href: 'https://uwaterloo.ca/math/',
    icon: '/badges/uwaterloo.png',
    tint: '#ecac39',
  },
  laurier: {
    label: 'Wilfrid Laurier',
    href: 'https://www.wlu.ca/academics/faculties/lazaridis-school-of-business-and-economics/',
    icon: '/badges/laurier.png',
    tint: '#330072',
    darkTint: '#9b6fd6',
  },
  lunate: {
    label: 'Lunate Studios',
    href: 'https://www.roblox.com/communities/261071327',
    icon: '/badges/lunate.png',
    tint: '#6b4fd8',
  },

  // Projects
  cramClub: {
    label: 'Cram Club',
    href: 'https://cramclub.study',
    icon: '/badges/cram-club.svg',
    tint: '#7fb27a',
  },
  poltar: {
    label: 'Poltar',
    href: 'https://github.com/anujmish1229/build',
    icon: '/badges/poltar.png',
    tint: '#f59e0b',
  },

  // Roblox games
  sealADriveway: {
    label: 'Seal A Driveway',
    href: game('120014184236770'),
    icon: '/badges/seal-a-driveway.png',
    tint: '#f5c542',
  },
  paintAHouse: {
    label: 'Paint a House',
    href: game('118564698121472'),
    icon: '/badges/paint-a-house.png',
    tint: '#3c7ae6',
  },
  cleanTheBeach: {
    label: 'Clean the Beach',
    href: game('98491176124242'),
    icon: '/badges/clean-the-beach.png',
    tint: '#46b5f4',
  },
  arcteryx: {
    label: "Arc'teryx Beading Tycoon",
    href: game('135060501061525'),
    icon: '/badges/arcteryx-tycoon.png',
    tint: '#4f8296',
  },
  animeRagdoll: {
    label: 'Anime Ragdoll Physics',
    href: game('125248938595050'),
    icon: '/badges/anime-ragdoll.png',
    tint: '#e5322d',
  },
  trainOrDie: {
    label: 'Train or Die',
    href: game('100236430418440'),
    icon: '/badges/train-or-die.png',
    tint: '#c47a4f',
  },
  tinyFishing: {
    label: 'Tiny Fishing',
    href: game('83205688837463'),
    icon: '/badges/tiny-fishing.png',
    tint: '#3a8fd6',
  },
  animeDuels: {
    label: 'Anime Duels',
    href: game('132769326204535'),
    icon: '/badges/anime-duels.png',
    tint: '#d64f8a',
  },
} satisfies Record<string, Badge>;

export const schools: Line = ['Math + Business at ', b.uwaterloo, ' and ', b.laurier];

// Visit counts are from Roblox on 2026-11-23.
export const sections: Section[] = [
  {
    heading: 'Currently',
    lines: [
      ['Co-founded ', b.lunate, ', a Roblox studio with 10+ games, 10M+ plays and 11K+ members'],
      [
        'Looking for ',
        { hl: 'S27 internships', href: `mailto:${email}?subject=S27%20internship` },
        ' (May to August 2027)',
      ],
    ],
  },
  {
    heading: 'Projects',
    lines: [
      [b.cramClub, ' a cozy 3D library to study in with other students and an AI librarian, built at Hack Western 13'],
      [b.poltar, ' scans a room with LiDAR and furnishes it from a style prompt, an iOS app built at UofTHacks Hack-or-Treat'],
    ],
  },
  {
    heading: 'Games',
    languages: true,
    lines: [
      [b.sealADriveway, ' a sealcoating sim with a real-time fluid simulation. 7.3M+ visits and 10K peak players'],
      [b.paintAHouse, ' paint houses with a roller, from starter homes up to a mansion. 340K+ visits'],
      [b.cleanTheBeach, ' a beach cleanup sim made for a client, with 60 pets and timed events. 277K+ visits'],
    ],
    more: {
      label: 'more games',
      lines: [
        [b.arcteryx, ' a tycoon about running an Arc\'teryx sweater stand. 74K+ visits'],
        [b.animeRagdoll, ' a ragdoll physics sandbox with anime fighters. 41K+ visits'],
        [b.trainOrDie, ' train survival with a miles-travelled system. 6K+ visits'],
        [b.tinyFishing, ' a fishing game with rods, menus and a HUD'],
        [b.animeDuels, ' an anime fighting game with perks, emotes and a shop'],
      ],
    },
  },
];

/**
 * Languages across my public GitHub repos, by bytes. To recount:
 *   for r in $(gh repo list suadalam --visibility public --source --json name --jq '.[].name'); do
 *     gh api repos/suadalam/$r/languages; echo; done
 * then add up the bytes per language. Colours are GitHub's.
 */
export const languages = [
  { name: 'Luau', pct: 82.5, color: '#00a2ff' },
  { name: 'TypeScript', pct: 10.1, color: '#3178c6' },
  { name: 'Python', pct: 6.2, color: '#3572a5' },
  { name: 'JavaScript', pct: 0.9, color: '#f1e05a' },
  { name: 'Other', pct: 0.3, color: '#8c959f' },
];
