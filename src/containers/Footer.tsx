const Footer = () => {
  return (
    <footer className={footer}>
        <p className={footerText}>
            Copiright &copy; {new Date().getFullYear()} Homenest
        </p>
    </footer>
  )
}

const footer = 'bg-slate-900 py-4'
const footerText = "text-center font-light text-sm text-slate-400"

export default Footer