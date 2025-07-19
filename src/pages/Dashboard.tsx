import LoadingSkeleton from "@/components/LoadingSkeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { useGeolocation } from "@/hooks/use-geolocation"
import { AlertTriangle, MapPin, RefreshCcw } from "lucide-react"

const Dashboard = () => {

  const {coordinates,
     error: locationError, 
     getLocation, 
     isLoading: locationLoading
    } = useGeolocation()

  console.log(coordinates)

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      //reload weather data
    }
  }

  if (locationLoading) {
    return (
      <LoadingSkeleton /> 
    )
  }

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-4">
      {/* Favorite Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button 
          variant={'outline'}
          size={'icon'}
          onClick={handleRefresh}
          // disabled={}
          >
          
           <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default Dashboard