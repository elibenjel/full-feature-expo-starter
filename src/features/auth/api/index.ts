import { queryOptions } from '@tanstack/react-query'

import { supabase } from '../supabase'

const getSession = queryOptions({
  queryKey: ['session'],
  queryFn: async () => {
    const { data } = await supabase.auth.getSession()

    return data.session
  },
})

export { getSession }
