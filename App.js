import Main from './src/components/Main.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faComputer } from '@fortawesome/free-solid-svg-icons/faComputer'
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons/faBoxesStacked'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays'

library.add(fab, faSquareCheck, faComputer, faBoxesStacked, faCalendarDays)

export default function App() {
  return <Main />
}

