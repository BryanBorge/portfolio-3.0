export type FooterSettings = {
  _id: string
  _type: 'footerSettings'
  _createdAt: string
  _updatedAt: string
  _rev: string
  location: string
  email: string
  socialLinks: {
    githubUrl: string
    githubIcon: string
    linkedinUrl: string
    linkedinIcon: string
  }
}

export type WorkExperienceReference = {
  _ref: string
  _type: 'reference'
  _weak?: boolean
  [internalGroqTypeReferenceTo]?: 'workExperience'
}

export type WorkExperienceSection = {
  _id: string
  _type: 'workExperienceSection'
  _createdAt: string
  _updatedAt: string
  _rev: string
  heading: string
  items: Array<
    {
      _key: string
    } & WorkExperienceReference
  >
}

export type CompanyReference = {
  _ref: string
  _type: 'reference'
  _weak?: boolean
  [internalGroqTypeReferenceTo]?: 'company'
}

export type WorkExperience = {
  _id: string
  _type: 'workExperience'
  _createdAt: string
  _updatedAt: string
  _rev: string
  role: string
  company: CompanyReference
  startDate: string
  endDate: string
  isCurrent: boolean
  description: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
  order: number
}

export type SanityImageAssetReference = {
  _ref: string
  _type: 'reference'
  _weak?: boolean
  [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
}

export type Company = {
  _id: string
  _type: 'company'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name: string
  logo: {
    asset?: SanityImageAssetReference
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  website?: string
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top: number
  bottom: number
  left: number
  right: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x: number
  y: number
  height: number
  width: number
}

export type Technology = {
  _type: 'technology'
  name: string
  variant: 'filled' | 'light'
}

export type TechnologyCategory = {
  _type: 'technologyCategory'
  title: string
  technologies: Array<
    {
      _key: string
    } & Technology
  >
}

export type TechStack = {
  _id: string
  _type: 'techStack'
  _createdAt: string
  _updatedAt: string
  _rev: string
  heading: string
  categories: Array<
    {
      _key: string
    } & TechnologyCategory
  >
}

export type About = {
  _id: string
  _type: 'about'
  _createdAt: string
  _updatedAt: string
  _rev: string
  about: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
}

export type Hero = {
  _id: string
  _type: 'hero'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name: string
  title: string
  heroSubtext: string
  profileImage: {
    asset?: SanityImageAssetReference
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height: number
  width: number
  aspectRatio: number
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  thumbHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Slug = {
  _type: 'slug'
  current: string
  source?: string
}

export type AllSanitySchemaTypes =
  | FooterSettings
  | WorkExperienceReference
  | WorkExperienceSection
  | CompanyReference
  | WorkExperience
  | SanityImageAssetReference
  | Company
  | SanityImageCrop
  | SanityImageHotspot
  | Technology
  | TechnologyCategory
  | TechStack
  | About
  | Hero
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityImageMetadata
  | SanityFileAsset
  | SanityAssetSourceData
  | SanityImageAsset
  | Geopoint
  | Slug

export declare const internalGroqTypeReferenceTo: unique symbol
