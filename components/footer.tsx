export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 border-t">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base text-muted-foreground">© {new Date().getFullYear()} Kamil Leśkiewicz</p>
      </div>
    </footer>
  )
}
