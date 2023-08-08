import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function useAuth () {
  const { signedUser, isSignedIn } = useContext(AuthContext)

  return { signedUser, isSignedIn }
}

export default useAuth