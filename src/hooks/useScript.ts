import { useEffect, useState } from 'react';

interface ScriptStatus {
  loaded: boolean;
  error: boolean;
}

/**
 * Custom hook to dynamically load an external script
 * @param src The source URL of the script to load
 * @returns Object with loaded and error states
 */
export const useScript = (src: string): ScriptStatus => {
  const [status, setStatus] = useState<ScriptStatus>({
    loaded: false,
    error: false,
  });

  useEffect(() => {
    // If the script is already in the DOM, consider it loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      setStatus({
        loaded: true,
        error: false,
      });
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    // Event handlers
    const handleLoad = () => {
      setStatus({
        loaded: true,
        error: false,
      });
    };

    const handleError = () => {
      script.remove();
      setStatus({
        loaded: false,
        error: true,
      });
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    // Append to document
    document.body.appendChild(script);

    // Cleanup
    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, [src]);

  return status;
};

export default useScript; 