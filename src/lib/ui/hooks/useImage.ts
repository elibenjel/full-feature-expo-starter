import { Skia } from '@shopify/react-native-skia'
import { useQuery } from '@tanstack/react-query'

async function fetchSkiaImage(uri: string) {
  const response = await fetch(uri)
  if (!response.ok) {
    throw new Error('Failed to load image: ' + response.statusText)
  }

  const buffer = await response.arrayBuffer()
  const bytes = new Uint8Array(buffer)

  // ✅ Convert into SkData
  const skData = Skia.Data.fromBytes(bytes)

  const skImage = Skia.Image.MakeImageFromEncoded(skData)
  if (!skImage) {
    throw new Error('Failed to decode image')
  }

  return skImage
}

export default function useImage(uri: string | undefined) {
  return useQuery({
    queryKey: ['skiaImage', uri],
    queryFn: () => fetchSkiaImage(uri!),
    enabled: !!uri,
    staleTime: Infinity,
    gcTime: Infinity,
  })
}
