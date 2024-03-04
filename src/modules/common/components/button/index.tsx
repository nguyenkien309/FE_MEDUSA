interface Props {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}
const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      className={`text-white bg-black justify-center items-center flex ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
