import { motion } from 'framer-motion'
import { useRouter } from 'nextra/hooks'
import { Link } from 'nextra-theme-docs'

const CodeBlockClassName = 'nextra-code'

const escapeHtml = (text: string) =>
  text.replace(/</g, '&lt;').replace(/>/g, '&gt;')

const backtickToCodeBlock = (text: string) =>
  text.replace(/`([^`]+)`/g, `<code class="${CodeBlockClassName}">$1</code>`)

const formatCodeBlocks = (desc: string) => backtickToCodeBlock(escapeHtml(desc))

export const HomePage = ({
  title,
  description,
  buttonText,
  items,
  version,
}: {
  title: string
  description: string
  buttonText: string
  items: { title: string; desc: string }[]
  version: number
}) => {
  return (
    <div className="pb-20">
      <div className="flex flex-col items-center justify-center gap-8 pt-52 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative text-5xl font-bold">
            <span>{title}</span>{' '}
            <span className="absolute text-sm">v{version}</span>
          </div>
          <p className="text-3xl">{description}</p>
        </div>
        <Link href={`/docs/autopalp2/introduction`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="animate-pulse rounded-xl bg-gray-200 dark:bg-gray-800 px-10 py-3 text-xl font-bold"
          >
            {buttonText}
          </motion.button>
        </Link>
      </div>

      <div className="h-32"></div>
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row pt-12">
        {items.map(({ title, desc }) => (
          <div
            className="flex flex-1 flex-col items-center justify-center gap-3 text-center"
            key={title}
          >
            <div className="text-xl font-bold">{title}</div>
            <p
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: formatCodeBlocks(desc) }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  )
}
