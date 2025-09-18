function detectFakeReview(text) {
 const lowerText = text.toLowerCase();
 const exclamationCount = (text.match(/!/g) || []).length;
 const exclamationRatio = exclamationCount / text.length;
 const superlatives = ['best', 'amazing', 'incredible', 'perfect', 'awesome', 'excellent', 
'outstanding', 'fantastic'];
 let superlativeCount = 0;
 superlatives.forEach(word => {
 const regex = new RegExp('\b' + word + '\b', 'gi');
 const matches = lowerText.match(regex) || [];
 superlativeCount += matches.length;
 });
 const wordCount = text.split(/\s+/).length;
 const hasSpecificDetails = wordCount > 30 && /\d+/.test(text);
 if (exclamationRatio > 0.05 || superlativeCount > 2 || !hasSpecificDetails) {
 return true; // Likely fake
 }
 return false; // Likely genuine
}
