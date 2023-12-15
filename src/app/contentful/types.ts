export interface Location {
  title: string
  cardTitle: string
  id: string
}

export interface MisionCard {
  title: string
  cardTitle: string
  cardDescription: string
  id: string
}

export interface Card {
  title: string
  cardTitle: string
  cardOwner?: string
  cardDescription: string
  id: string
}

export interface Inbox {
  mail: string
  title: string
}

export interface Phone {
  title: string
  phone: string
}

export interface Root {
  title: string
  heroTitle?: string
  heroDescription?: string
  location?: Location[]
  buttonCopy?: string
  buttonLink?: string
  id: string
  gridOne?: string
  gridTwo?: string
  gridThree?: string
  gridFour?: string
  blueBox?: string
  carouselCopy?: string
  misionCards?: MisionCard[]
  description: any
  bookingCopy?: string
  buttonInstagramCopy?: string
  buttonInstagramLink?: string
  buttonLinkedInCopy?: string
  buttonLinkedInLink?: string
  buttonFacebookCopy?: string
  buttonFacebookLink?: string
  mainTitle?: string
  cards?: Card[]
  inbox?: Inbox
  phone?: Phone
  buttonContactCopy?: string
}
