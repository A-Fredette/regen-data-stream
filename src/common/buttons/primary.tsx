const PrimaryButton = ({
  onClick,
  text
}: {
  onClick: () => void
  text: string
}) => (
  <button
    onClick={onClick}
    className="max-h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {text}
  </button>
)

export default PrimaryButton
