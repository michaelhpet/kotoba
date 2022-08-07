import { PaletteMode } from '@mui/material'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface paletteType {
  palette: PaletteMode
  setPalette: (mode: PaletteMode) => void
}

const usePalette = create<paletteType, [['zustand/persist', PaletteMode]]>(
  persist(
    (set) => ({
      palette: 'dark',
      setPalette: (mode: PaletteMode) => set(() => ({ palette: mode })),
    }),
    { name: 'palette' }
  )
)

export default usePalette
