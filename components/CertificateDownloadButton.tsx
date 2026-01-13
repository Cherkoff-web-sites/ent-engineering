'use client'

import Button from '@/components/ui/Button'

interface CertificateDownloadButtonProps {
  file: string
}

export default function CertificateDownloadButton({ file }: CertificateDownloadButtonProps) {
  const handleDownload = () => {
    window.open(file, '_blank')
  }

  return (
    <Button
      variant="outline"
      size="md"
      className="w-full sm:w-auto whitespace-nowrap"
      onClick={handleDownload}
    >
      Скачать
      <svg
        className="ml-2 w-4 h-4 inline-block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </Button>
  )
}
