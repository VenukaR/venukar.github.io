# Gallery Images

Add your images to this folder with descriptive names.

## Recommended Format
- Format: JPG or PNG
- Max size: 2MB per image
- Dimensions: 1200x900 or similar aspect ratio

## How to Add Images

1. Save your images in this folder with descriptive names like:
   - `award-ceremony.jpg`
   - `hackathon-2024.jpg`
   - `graduation.jpg`
   - `project-demo.jpg`

2. Update the `galleryImages` array in `/app/gallery/page.tsx`:

```javascript
const galleryImages = [
  {
    src: "/gallery/award-ceremony.jpg",
    alt: "Award Ceremony",
    title: "Award Ceremony 2024",
    description: "Receiving certificate of achievement",
  },
  {
    src: "/gallery/your-image-name.jpg",
    alt: "Description for accessibility",
    title: "Title shown in gallery",
    description: "Description shown when hovering",
  },
];
```

3. Rebuild and redeploy your website
