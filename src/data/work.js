// Content for the featured work section. All three clients are invented.
//  - `filters` are the buttons above the grid. 'all' is special: it shows every project.
//  - `categories` says which filters a project appears under (a project can have more than one).
//  - `art` names a drawing in components/WorkArt.jsx; `tone` is the colour behind it (terracotta, green or charcoal).
export const workIntro = {
  eyebrow: 'Featured work',
  heading: 'Brands we have helped build',
}

export const filters = [
  { id: 'all', label: 'All' },
  { id: 'brand', label: 'Brand' },
  { id: 'web', label: 'Web' },
]

export const projects = [
  {
    id: 'kahawa-roasters',
    name: 'Kahawa Roasters',
    summary: 'Brand identity · Packaging',
    categories: ['brand'],
    art: 'coffee',
    tone: 'terracotta',
  },
  {
    id: 'mama-njeri-boutique',
    name: 'Mama Njeri Boutique',
    summary: 'Website · Online shop',
    categories: ['web'],
    art: 'dress',
    tone: 'green',
  },
  {
    id: 'savanna-eats',
    name: 'Savanna Eats',
    summary: 'Brand identity · Website',
    categories: ['brand', 'web'],
    art: 'table',
    tone: 'charcoal',
  },
]
