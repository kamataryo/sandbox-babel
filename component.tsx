import { __, sprintf } from '@wordpress/i18n'

type Props = {
  name: string
}

export const Component = (props: Props) => {
  return <p>{sprintf(__('My name is %s.', 'your-domain'), props.name)}</p>
}
