import React, { useState } from 'react'
import { supabase } from '../supabase'

const EmailSignup = ({ className = '', variant = 'primary' }) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }])

      if (error) {
        if (error.code === '23505') {
          setError('This email is already subscribed!')
        } else {
          setError('Something went wrong. Please try again.')
        }
        return
      }

      setIsSuccess(true)
      setEmail('')
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className={`text-center p-4 bg-green-50 border border-green-200 rounded-lg ${className}`}>
        <p className="text-green-800 font-medium">Thanks! You're on the list.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`px-6 py-3 font-medium text-white rounded-lg transition-all duration-200 ${
            variant === 'primary'
              ? 'bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
              : 'bg-gray-900 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isLoading ? 'Subscribing...' : 'Get Early Access'}
        </button>
      </div>
      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}
    </form>
  )
}

export default EmailSignup 