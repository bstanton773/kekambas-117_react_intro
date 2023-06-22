import Alert from 'react-bootstrap/Alert';
import CategoryType from '../types/category';


type AlertMessageProps = {
    message: string|null
    category: CategoryType
    flashMessage: (message: string|null, category: CategoryType) => void
}

export default function AlertMessage({ message, category, flashMessage }: AlertMessageProps) {
    return (
        <Alert variant={category as string} className='text-center' onClose={() => flashMessage(null, null)} dismissible>
            { message }
        </Alert>
    )
}
