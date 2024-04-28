import * as React from 'react';
const Breathable = (props: any) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={146}
		height={197}
		fill='none'
		{...props}
	>
		<path
			fill='#000'
			d='M11.07 172.76a6.07 6.07 0 0 1 1.804.25c.538.153.998.377 1.383.672.383.281.678.633.883 1.056.204.409.307.87.307 1.382 0 .448-.064.839-.192 1.171a2.941 2.941 0 0 1-.48.884 3.319 3.319 0 0 1-.691.652c-.243.167-.5.308-.768.423.396.115.768.269 1.113.461.359.179.666.396.922.652s.46.564.614.922c.154.358.23.768.23 1.229a3.43 3.43 0 0 1-.345 1.555c-.23.461-.563.851-.998 1.171-.423.307-.935.544-1.536.711a7.497 7.497 0 0 1-1.997.249H5.348v-13.44h5.721Zm-.25 5.991c.909 0 1.65-.205 2.227-.615.576-.409.864-1.011.864-1.805 0-.678-.256-1.216-.768-1.612-.512-.397-1.248-.596-2.208-.596h-4.09v4.628h3.975Zm.537 6.086c1.024 0 1.83-.211 2.42-.634.588-.422.883-1.017.883-1.785 0-.743-.301-1.312-.903-1.709-.601-.41-1.49-.614-2.668-.614H6.845v4.742h4.512Zm19.348 1.363h-1.863l-3.897-5.222h-3.84v5.222h-1.517v-13.44h5.78c.742 0 1.407.096 1.996.288a4.41 4.41 0 0 1 1.536.826c.422.345.749.768.98 1.267.23.486.345 1.03.345 1.632 0 .563-.09 1.069-.27 1.517a3.5 3.5 0 0 1-.767 1.152c-.32.32-.704.589-1.152.806a5.402 5.402 0 0 1-1.46.461l4.129 5.491Zm-2.016-9.369c0-.845-.301-1.498-.903-1.959-.601-.473-1.446-.71-2.534-.71h-4.147v5.453h4.128c.499 0 .96-.064 1.382-.192a3.504 3.504 0 0 0 1.095-.538c.307-.243.543-.538.71-.883.18-.346.269-.736.269-1.171Zm14.873-4.071v1.383h-8.198v4.588h7.334v1.383h-7.334v4.704h8.294v1.382h-9.811v-13.44h9.715Zm9.925-.096 6.125 13.536H57.98l-1.575-3.552H49.09l-1.593 3.552H45.94l6.125-13.536h1.421Zm2.323 8.621-3.053-6.854-3.072 6.854h6.125Zm10.2-7.123V186.2h-1.537v-12.038h-4.512v-1.402h10.56v1.402H66.01Zm17.019 5.99h-7.757v6.048h-1.517v-13.44h1.517v5.971h7.757v-5.971h1.517v13.44h-1.517v-6.048Zm12.091-7.488 6.125 13.536h-1.632l-1.574-3.552h-7.316L89.13 186.2h-1.555l6.124-13.536h1.421Zm2.323 8.621-3.052-6.854-3.072 6.854h6.124Zm12.558-8.525c.666 0 1.267.083 1.805.25.537.153.998.377 1.382.672.384.281.679.633.883 1.056.205.409.308.87.308 1.382 0 .448-.064.839-.192 1.171a2.977 2.977 0 0 1-.48.884 3.327 3.327 0 0 1-.692.652 4.422 4.422 0 0 1-.768.423c.397.115.768.269 1.114.461.358.179.666.396.922.652s.46.564.614.922c.154.358.23.768.23 1.229 0 .576-.115 1.094-.345 1.555a3.237 3.237 0 0 1-.999 1.171c-.422.307-.934.544-1.536.711a7.491 7.491 0 0 1-1.996.249h-5.972v-13.44h5.722Zm-.25 5.991c.909 0 1.652-.205 2.228-.615.576-.409.864-1.011.864-1.805 0-.678-.256-1.216-.768-1.612-.512-.397-1.248-.596-2.208-.596h-4.09v4.628h3.974Zm.538 6.086c1.024 0 1.83-.211 2.419-.634.589-.422.883-1.017.883-1.785 0-.743-.3-1.312-.902-1.709-.602-.41-1.491-.614-2.669-.614h-4.243v4.742h4.512Zm8.231 1.363v-13.44h1.516v12.039h7.565v1.401h-9.081Zm21.986-13.44v1.383h-8.198v4.588h7.334v1.383h-7.334v4.704h8.294v1.382h-9.811v-13.44h9.715ZM69.835 22.296c-.486 0-.972.325-1.296.649-8.914 12.479-24.31 49.755-17.99 63.207 3.404 6.32 13.128 23.824 17.18 32.9 1.944 4.214 5.834 6.969 10.048 6.969 4.376 0 8.265-2.755 10.534-7.455a2.25 2.25 0 0 0 0-1.459l-2.917-5.51c-2.917-20.907 10.048-44.894 15.721-54.131.324-.649.324-1.46-.162-1.945L71.132 22.783c-.324-.325-.81-.487-1.297-.487Zm7.942 100.483c-2.917 0-5.673-1.944-6.97-5.024-2.43-5.186-6.968-14.262-13.937-26.903 3.89.486 8.428-1.459 11.831-3.242l13.614 25.283 2.593 5.024c-1.62 3.08-4.214 4.862-7.131 4.862Zm3.89-17.989-10.86-20.259c-.485-.81-1.62-.972-2.268-.648-5.348 3.241-12.155 6.158-15.073.648-4.7-10.372 6.807-42.948 16.532-58.02l27.551 30.144c-5.348 9.238-15.72 28.849-15.883 48.135Z'
		/>
		<path
			fill='#000'
			d='M90.419 59.897c.81.486 1.782.162 2.107-.648l.648-1.135c.486-.81.162-1.783-.648-2.107-.81-.486-1.783-.162-2.107.649l-.649 1.134c-.486.648-.162 1.62.649 2.107ZM80.531 56.007c.81.486 1.783.162 2.107-.648l.648-1.135c.486-.81.162-1.782-.648-2.106-.81-.487-1.783-.163-2.107.648l-.648 1.134c-.486.81-.162 1.783.648 2.107ZM76.965 45.796c.81.486 1.783.162 2.107-.648l.649-1.134c.486-.81.162-1.783-.649-2.107-.81-.486-1.782-.162-2.107.648l-.648 1.134c-.324.81 0 1.783.648 2.107ZM67.08 45.31c.81.487 1.782.163 2.106-.648l.649-1.134c.486-.81.162-1.783-.649-2.107-.81-.486-1.782-.162-2.107.648l-.648 1.135c-.486.648-.162 1.62.648 2.106ZM87.177 66.541c.81.487 1.783.163 2.107-.648l.649-1.134c.486-.81.162-1.783-.649-2.107-.81-.486-1.783-.162-2.107.648l-.648 1.135c-.486.81-.162 1.782.648 2.106ZM79.235 58.762c-.81-.487-1.782-.162-2.107.648l-.648 1.134c-.486.81-.162 1.783.648 2.107.81.486 1.783.162 2.107-.648l.649-1.135c.486-.648.162-1.62-.649-2.106ZM73.725 52.603c.81.487 1.783.163 2.107-.648l.648-1.134c.486-.81.162-1.783-.648-2.107-.81-.486-1.783-.162-2.107.648l-.648 1.135a1.64 1.64 0 0 0 .648 2.106ZM63.838 51.956c.81.486 1.783.162 2.107-.649l.648-1.134c.486-.81.162-1.783-.648-2.107-.81-.486-1.783-.162-2.107.648l-.648 1.135c-.486.81-.162 1.782.648 2.107ZM83.936 73.348c.81.486 1.782.162 2.106-.648l.649-1.135c.486-.81.162-1.782-.648-2.107-.81-.486-1.783-.162-2.107.649l-.649 1.134c-.486.648-.162 1.62.649 2.107ZM73.886 69.621c.81.486 1.783.162 2.107-.648l.648-1.135c.487-.81.163-1.782-.648-2.107-.81-.486-1.782-.162-2.107.649l-.648 1.134a1.64 1.64 0 0 0 .648 2.107ZM70.483 59.248c.81.487 1.782.163 2.106-.648l.649-1.134c.486-.81.162-1.783-.648-2.107-.81-.486-1.783-.162-2.107.648l-.649 1.135c-.486.81-.162 1.782.649 2.106ZM60.597 58.762c.81.486 1.782.162 2.106-.649l.649-1.134c.486-.81.162-1.783-.648-2.107-.81-.486-1.783-.162-2.107.648l-.649 1.135c-.486.648-.162 1.62.649 2.107ZM82.638 76.103c-.81-.486-1.783-.162-2.107.649l-.648 1.134c-.486.81-.162 1.783.648 2.107.81.486 1.783.162 2.107-.648l.648-1.135c.486-.81.162-1.782-.648-2.107ZM72.753 72.376c-.81-.486-1.783-.162-2.107.648l-.648 1.135c-.487.81-.163 1.782.648 2.107.81.486 1.782.162 2.107-.649l.648-1.134c.486-.81.162-1.783-.648-2.107ZM76.318 81.128c-.81-.486-1.783-.162-2.107.648l-.648 1.135c-.486.81-.162 1.782.648 2.106.81.487 1.783.163 2.107-.648l.648-1.134c.487-.648.162-1.62-.648-2.107ZM69.348 62.003c-.81-.486-1.783-.162-2.107.648l-.648 1.135c-.486.81-.162 1.782.648 2.106.81.487 1.783.163 2.107-.648l.648-1.134c.487-.648.163-1.62-.648-2.107ZM62.38 66.055c-.811-.487-1.784-.163-2.108.648l-.648 1.134c-.486.81-.162 1.783.648 2.107.81.486 1.783.162 2.107-.648l.648-1.135c.487-.81.163-1.782-.648-2.106ZM65.46 74.969c-.811-.486-1.784-.162-2.108.648l-.648 1.134c-.486.81-.162 1.783.648 2.107.81.487 1.783.162 2.107-.648l.648-1.134c.487-.649.163-1.621-.648-2.107ZM107.759 53.09c-2.593-2.108-4.214-5.187-4.376-8.428 0-.81-.81-1.621-1.783-1.459-.972 0-1.62.81-1.458 1.783.324 4.214 2.431 7.941 5.672 10.696 3.728 3.08 7.617 3.89 11.993 3.566l-1.783 1.945c-.648.648-.486 1.782.162 2.269.649.648 1.783.486 2.269-.162l4.214-5.024c.648-.81.324-1.783-.162-2.27l-5.024-4.375c-.648-.649-1.783-.487-2.269.162-.648.648-.486 1.782.162 2.269l2.107 1.782c-.324 0-5.186.973-9.724-2.755ZM123.642 85.99l-4.7-4.7c-.649-.649-1.621-.649-2.269 0-.649.648-.649 1.62 0 2.268l1.945 1.945h-.487c-6.969 0-12.479-5.672-12.479-12.479 0-.972-.648-1.62-1.621-1.62-.972 0-1.62.648-1.62 1.62 0 8.752 7.131 15.72 15.72 15.72h.487l-1.945 1.946c-.649.648-.649 1.62 0 2.269.648.648 1.62.648 2.269 0l4.7-4.7c.648-.649.648-1.621 0-2.27ZM24.942 54.548c-.973 0-1.621.648-1.621 1.62 0 8.752 7.131 15.721 15.72 15.721h.65l-1.946 1.945c-.648.648-.648 1.62 0 2.27.649.647 1.62.647 2.27 0l4.7-4.7c.647-.65.647-1.622 0-2.27l-4.7-4.7c-.65-.648-1.621-.648-2.27 0-.648.648-.648 1.62 0 2.27l1.945 1.944h-.486c-6.97 0-12.48-5.672-12.48-12.48-.162-.81-.81-1.62-1.782-1.62ZM31.263 37.368c0-.972-.649-1.62-1.62-1.62-.973 0-1.622.648-1.622 1.62 0 8.752 7.131 15.721 15.721 15.721h.486l-1.945 1.945c-.648.648-.648 1.62 0 2.269.649.648 1.621.648 2.27 0l4.7-4.7c.648-.648.648-1.62 0-2.27l-4.7-4.7c-.649-.648-1.621-.648-2.27 0-.648.65-.648 1.621 0 2.27l1.945 1.945h-.486c-6.969 0-12.48-5.673-12.48-12.48ZM98.035 89.231c-.972-.162-1.783.486-1.783 1.297-.648 4.213.486 8.265 2.918 11.669 2.431 3.403 6.158 5.672 10.372 6.158h.486l-2.107 1.621c-.648.486-.81 1.621-.324 2.269.486.648 1.621.81 2.269.324l5.348-3.89c.649-.486.811-1.458.324-2.269l-3.889-5.348c-.486-.648-1.621-.81-2.269-.324-.648.486-.81 1.621-.324 2.269l1.62 2.107h-.486c-3.241-.486-6.158-2.269-8.265-4.862s-2.755-5.997-2.27-9.238c-.161-.81-.648-1.62-1.62-1.783Z'
		/>
	</svg>
);
export default Breathable;
