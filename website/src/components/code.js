import Highlight, { defaultProps } from 'prism-react-renderer'

export const Code = ({ language = 'jsx', children }) => {
  const code = children.trim()

  return (
    <Highlight
      {...defaultProps}
      language={language}
      code={code}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} notranslate`} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
