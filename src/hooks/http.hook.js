import { useState, useCallback } from "react";

export const useHttp = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const request = useCallback(async (url, method = 'GET', body = null, headers = { 'X-API-KEY': '817e16ef-f08e-4086-b21e-0d3737b1b32d', 'Content-Type': 'application/json' }) => {

      setLoading(true);

      try {
         const response = await fetch(url, { method, body, headers });

         if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
         }

         const data = await response.json();

         setLoading(false);
         return data;
      } catch (e) {
         setLoading(false);
         setError(e.message);
         throw e;
      }

   }, []);

   const clearError = useCallback(() => setError(null), []);

   return { loading, request, error, clearError }
}