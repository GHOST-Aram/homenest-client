export const createImageUrlFromBase64 = (image: {data: string, contentType: string }) =>{
    // Convert base64 data to a Blob
   const byteCharacters = atob(image.data)
   const byteNumbers = new Array(byteCharacters.length)

   for (let i = 0; i < byteCharacters.length; i++) {
       byteNumbers[i] = byteCharacters.charCodeAt(i)
   }
   const byteArray = new Uint8Array(byteNumbers)
   const blob = new Blob([byteArray], { type: image.contentType })

   // Create an object URL for the Blob
   const imageUrl = URL.createObjectURL(blob)

   return imageUrl
}