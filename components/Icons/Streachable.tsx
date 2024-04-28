import * as React from 'react';
const Streachable = (props: any) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={150}
		height={197}
		fill='none'
		{...props}
	>
		<path
			fill='#000'
			d='M3.524 176.12c0 .32.051.608.153.864.103.256.288.493.557.711.27.204.64.396 1.114.576a14.68 14.68 0 0 0 1.824.48c1.497.332 2.598.793 3.302 1.382.717.589 1.075 1.402 1.075 2.438 0 .576-.115 1.101-.345 1.575-.23.473-.55.877-.96 1.209a4.18 4.18 0 0 1-1.44.768 6.026 6.026 0 0 1-1.843.269c-1.076 0-2.061-.173-2.957-.518-.883-.359-1.728-.903-2.535-1.632l.941-1.114c.704.64 1.415 1.12 2.131 1.44.717.307 1.543.461 2.477.461.91 0 1.632-.211 2.17-.634.55-.422.825-.979.825-1.67 0-.32-.05-.602-.153-.845a1.7 1.7 0 0 0-.538-.691c-.256-.205-.614-.39-1.075-.557a13.265 13.265 0 0 0-1.728-.48 14.228 14.228 0 0 1-2.016-.576c-.563-.217-1.03-.48-1.402-.787a2.895 2.895 0 0 1-.825-1.075c-.18-.41-.269-.896-.269-1.459 0-.538.109-1.031.326-1.479a3.34 3.34 0 0 1 .922-1.152 4.236 4.236 0 0 1 1.402-.768 5.218 5.218 0 0 1 1.766-.288c.986 0 1.843.141 2.573.423.742.268 1.46.678 2.15 1.228l-.883 1.172c-.627-.512-1.26-.884-1.9-1.114a5.699 5.699 0 0 0-1.978-.346c-.436 0-.832.058-1.19.173a3.148 3.148 0 0 0-.903.461 2.132 2.132 0 0 0-.576.691 1.985 1.985 0 0 0-.192.864Zm16.3-1.958V186.2H18.29v-12.038h-4.512v-1.402h10.56v1.402h-4.512ZM38.688 186.2h-1.862l-3.898-5.222h-3.84v5.222h-1.516v-13.44h5.779c.742 0 1.408.096 1.997.288a4.41 4.41 0 0 1 1.536.826c.422.345.748.768.979 1.267.23.486.346 1.03.346 1.632 0 .563-.09 1.069-.27 1.517a3.5 3.5 0 0 1-.767 1.152c-.32.32-.704.589-1.152.806a5.402 5.402 0 0 1-1.46.461l4.129 5.491Zm-2.015-9.369c0-.845-.301-1.498-.903-1.959-.602-.473-1.446-.71-2.534-.71h-4.148v5.453h4.128c.5 0 .96-.064 1.383-.192a3.504 3.504 0 0 0 1.094-.538c.307-.243.544-.538.71-.883.18-.346.27-.736.27-1.171Zm14.873-4.071v1.383h-8.199v4.588h7.335v1.383h-7.334v4.704h8.294v1.382H41.83v-13.44h9.715Zm8.62 1.402V186.2h-1.537v-12.038h-4.512v-1.402h10.56v1.402h-4.512Zm18.346 9.907c-.345.358-.71.685-1.094.979a6.74 6.74 0 0 1-1.21.73 6.928 6.928 0 0 1-1.401.48c-.5.115-1.056.173-1.67.173-.973 0-1.87-.18-2.689-.538a6.716 6.716 0 0 1-2.13-1.459 6.957 6.957 0 0 1-1.422-2.208 7.375 7.375 0 0 1-.499-2.727c0-.96.167-1.862.5-2.707a6.957 6.957 0 0 1 1.42-2.208 6.37 6.37 0 0 1 2.15-1.497c.833-.372 1.741-.557 2.727-.557.614 0 1.165.051 1.651.153.5.103.96.25 1.383.442a5.55 5.55 0 0 1 1.17.672c.36.256.705.544 1.038.864l-1.037 1.114a8.362 8.362 0 0 0-1.863-1.325c-.652-.346-1.44-.519-2.361-.519-.743 0-1.434.141-2.074.423a5.172 5.172 0 0 0-1.651 1.171 5.634 5.634 0 0 0-1.094 1.766 5.997 5.997 0 0 0-.384 2.17c0 .781.128 1.51.384 2.189a5.634 5.634 0 0 0 1.094 1.766 5.46 5.46 0 0 0 1.651 1.191 5.1 5.1 0 0 0 2.074.422c.921 0 1.715-.166 2.38-.499.666-.346 1.319-.826 1.959-1.44l.998.979Zm12.313-3.917h-7.757v6.048H81.55v-13.44h1.517v5.971h7.757v-5.971h1.517v13.44h-1.517v-6.048Zm12.092-7.488 6.124 13.536h-1.632l-1.574-3.552h-7.315l-1.594 3.552H95.37l6.125-13.536h1.421Zm2.323 8.621-3.053-6.854-3.072 6.854h6.125Zm12.557-8.525c.666 0 1.267.083 1.805.25.538.153.998.377 1.382.672.384.281.679.633.884 1.056.204.409.307.87.307 1.382 0 .448-.064.839-.192 1.171a2.933 2.933 0 0 1-.48.884 3.323 3.323 0 0 1-.691.652c-.244.167-.5.308-.768.423.396.115.768.269 1.113.461.359.179.666.396.922.652a2.9 2.9 0 0 1 .614.922c.154.358.231.768.231 1.229 0 .576-.116 1.094-.346 1.555-.23.461-.563.851-.998 1.171-.423.307-.935.544-1.536.711a7.504 7.504 0 0 1-1.997.249h-5.971v-13.44h5.721Zm-.249 5.991c.908 0 1.651-.205 2.227-.615.576-.409.864-1.011.864-1.805 0-.678-.256-1.216-.768-1.612-.512-.397-1.248-.596-2.208-.596h-4.09v4.628h3.975Zm.537 6.086c1.024 0 1.831-.211 2.419-.634.589-.422.884-1.017.884-1.785 0-.743-.301-1.312-.903-1.709-.601-.41-1.491-.614-2.669-.614h-4.243v4.742h4.512Zm8.231 1.363v-13.44h1.517v12.039h7.565v1.401h-9.082Zm21.987-13.44v1.383h-8.199v4.588h7.335v1.383h-7.335v4.704h8.295v1.382h-9.812v-13.44h9.716ZM53.15 98.279c.447.317.945-.358.49-.686-.453-.326-.89-.656-1.327-1.002-.443-.35-.952.316-.526.657.448.357.898.697 1.363 1.03Zm78.015-19.895c-.552 0-.552-.84 0-.84l3.663.001-.051 3.537c-.006.552-.846.542-.839-.01l.039-2.687-2.812-.002ZM33.053 57.14c-.548.069-.653-.764-.106-.833l3.633-.471.406 3.515c.062.55-.774.646-.837.096l-.307-2.669-2.79.362Zm15.51-3.791c-.549.07-.654-.764-.106-.833l3.633-.47.405 3.515c.063.55-.773.645-.836.095l-.308-2.668-2.789.361Zm45.393 44.056c-.563-.024-.583.82-.036.842.568.023 1.134.034 1.703.033.548 0 .56-.843 0-.843-.557.002-1.11-.01-1.667-.032Zm38.321-16.869c.412-.383-.161-.99-.569-.622-.226.207-.452.412-.679.617-.418.377.157.993.564.627.229-.207.457-.414.684-.622Zm-2.585 2.302a.422.422 0 0 0-.551-.638c-.423.366-.849.73-1.278 1.089-.428.364.118.996.541.646.432-.362.861-.728 1.288-1.097Zm-3.253 2.705c.438-.352-.094-1-.524-.66-.438.349-.878.694-1.322 1.034-.446.342.078 1.002.512.67.448-.344.893-.692 1.334-1.044Zm-3.372 2.56c.453-.326-.041-1.003-.491-.684-.454.326-.91.649-1.371.965-.463.319.026 1.005.477.695.465-.32.927-.645 1.385-.975Zm-3.505 2.381c.463-.293.022-1.012-.452-.712-.471.3-.945.595-1.423.882-.483.29-.035 1.004.432.723.485-.29.965-.59 1.443-.893Zm-3.651 2.16c.493-.273.079-1.002-.402-.741-.49.266-.983.527-1.48.78-.496.253-.117.997.379.752.505-.256 1.006-.52 1.503-.791Zm-3.803 1.889c.512-.233.162-.991-.342-.77-.509.227-1.021.445-1.537.656-.508.209-.204.99.316.781a52.311 52.311 0 0 0 1.563-.667Zm-3.951 1.563c.528-.184.249-.974-.273-.798-.528.18-1.056.35-1.589.512-.531.16-.289.967.242.807a48.222 48.222 0 0 0 1.62-.521Zm-4.089 1.18c.543-.127.352-.941-.189-.822-.543.126-1.084.24-1.631.345-.551.104-.388.925.153.829a43.674 43.674 0 0 0 1.667-.352Zm-4.193.741c.559-.07.447-.9-.098-.837-.553.066-1.103.118-1.658.16-.55.04-.498.881.06.841a40.018 40.018 0 0 0 1.696-.164ZM36.03 95.873c.411.388.973-.236.58-.611a18.269 18.269 0 0 1-1.138-1.19c-.37-.422-.995.143-.633.555.379.436.774.846 1.19 1.246Zm-1.488-36.747c.335-.437-.318-.957-.664-.518-.352.452-.69.922-1.001 1.403-.3.474.408.916.709.456.3-.463.618-.906.956-1.34Zm-2.177 3.497c.24-.496-.51-.873-.757-.37a24.924 24.924 0 0 0-.703 1.563c-.207.517.57.828.78.317.21-.51.435-1.015.68-1.51Zm-1.51 3.854c.158-.54-.649-.766-.807-.24a32.113 32.113 0 0 0-.448 1.648c-.112.478.658.862.848.08.125-.501.26-.994.408-1.488Zm-.923 4.05c.084-.541-.746-.684-.833-.13a37.85 37.85 0 0 0-.225 1.69c-.058.557.775.638.838.09.06-.553.134-1.1.22-1.65Zm-1.254 4.663c-.008.385-.008.77-.003 1.156.011.561.848.535.842-.013-.005-.398-.003-.794.005-1.192 7.096-.456 13.829-1.951 20.531-4.496 9.8-3.722 19.521-9.684 30.215-17.924l.247-.19c1.447-1.12 1.724-1.333 3.652-1.01l.01.003 50.037 7.54c3.223.485 1.89 1.793.119 3.008-6.941 4.762-13.901 9.498-20.81 14.306-6.75 4.698-14.67 6.885-22.913 5.911-7.951-.94-16.213-4.817-24.034-12.214-3.492-3.303-3.51-2.535-7.486-.066-5.355 3.326-11.083 5.45-16.73 6.608a.415.415 0 0 0 .048-.209 33.221 33.221 0 0 1-.002-1.664c.011-.56-.832-.566-.843-.017-.013.57-.013 1.135.002 1.706.004.123.06.236.152.312a53.562 53.562 0 0 1-12.237.926c-3.591-.145-6.978-.658-10.015-1.464-1.865-.494-3.213-.904-4.114-1.236.97-.027 2.33.02 3.976.132a77.65 77.65 0 0 0 9.351.087Zm.134 3.852c.046.52.106 1.038.174 1.555.022.15.11.26.224.317a65.22 65.22 0 0 1-5.578-.706c-3.366-.582-6.555-1.46-8.618-2.703-.598-.4-1.197-.97-1.305-1.72.84.44 2.57 1.027 5.4 1.778 2.956.784 6.233 1.299 9.703 1.479Zm.72 1.898a.422.422 0 0 0 .289-.459 36.408 36.408 0 0 1-.16-1.402c10.829.387 20.685-2.48 30.086-7.853 3.562-2.035 2.891-2.953 5.869-.136 8.058 7.622 16.596 11.62 24.83 12.593 8.55 1.01 16.761-1.24 23.769-6.08 6.944-4.798 13.908-9.57 20.868-14.346a10.73 10.73 0 0 0 1.074-.82c.533-.472.694-.835.476.271-.154.779-.594 1.567-1.492 2.258l-22.007 15.937c-2.926 2.032-6.094 3.34-9.524 4.232-3.26.825-6.6 1.165-9.785 1.16-10.61-.013-20.687-4.608-28.157-12.05-3.248-3.238-2.932-2.302-6.451-.264-5.121 2.967-10.626 5.177-16.44 6.313a29.33 29.33 0 0 1-.194-1.4c-.063-.545-.901-.46-.837.096.056.487.122.974.202 1.458-4.254.753-8.116.835-12.416.492Zm.028 2.799c.082.348.169.694.261 1.04.15.541.955.31.814-.22l-.16-.62c8.544 1.848 19.367 3.473 30.475 4.373 15.524 1.259 31.644 1.114 42.929-1.8 3.582-.898 7.017-2.346 10.056-4.457l22.043-15.964c1.216-.93 1.816-2.022 2.032-3.114.288-2.85-.374-5.022-3.635-5.309l-49.989-7.533v.001c-2.52-.42-2.875-.146-4.727 1.286l-.247.19C68.827 59.77 59.22 65.666 49.56 69.334a71.777 71.777 0 0 1-6.91 2.238c.04-.322.087-.644.137-.965.081-.557-.748-.67-.833-.127-.068.44-.128.879-.181 1.321-7.131 1.81-14.447 2.441-22.351 1.904-2.082-.141-3.753-.18-4.82-.093-1.784.143-2.762 1.226-2.128 2.96.287.786.928 1.58 1.754 2.092 2.343 1.619 7.917 3.427 15.333 5.076Zm1.824 3.195c-.197-.527-.979-.226-.792.29.198.539.407 1.063.635 1.59.219.5.997.177.771-.34-.22-.51-.423-1.018-.614-1.54Zm1.72 3.765c-.278-.488-1.002-.062-.732.416.285.5.58.983.9 1.462.313.464 1.005-.013.7-.47a23.303 23.303 0 0 1-.867-1.408Zm16.474-34.992c.376-.405-.24-.98-.619-.572-.393.421-.761.854-1.12 1.303-.346.438.321.953.663.52.346-.432.699-.846 1.076-1.251Zm-2.512 3.277c.296-.476-.42-.913-.714-.447-.305.483-.593.973-.87 1.473-.26.48.467.897.74.403.269-.485.549-.96.844-1.43Zm-1.948 3.663c.222-.506-.548-.85-.771-.34a33.26 33.26 0 0 0-.649 1.581c-.197.527.598.809.79.296.196-.52.407-1.029.63-1.537Zm-1.423 3.903c.156-.537-.656-.762-.81-.234-.159.547-.304 1.096-.436 1.65-.127.55.696.724.82.193.129-.54.27-1.076.426-1.61Zm-.344 16.418c-.149-.539-.955-.312-.813.222.147.546.31 1.088.49 1.625-4.85-.738-9.367-1.576-13.328-2.456 4.305.325 8.183.226 12.44-.524 6.262-1.103 12.205-3.412 17.78-6.641 2.8-1.622 2.162-2.546 4.76.043 6.49 6.466 14.903 10.872 24.005 12.106-8.595.579-18.215.333-27.625-.43a261.344 261.344 0 0 1-17.28-1.984.415.415 0 0 0 .05-.371 28.003 28.003 0 0 1-.479-1.59Zm1.382 3.905c-.232-.51-.992-.152-.768.347.233.52.484 1.035.749 1.54.264.494 1 .093.744-.395-.257-.49-.499-.986-.725-1.492Zm1.992 3.632c-.304-.456-1.01-.005-.703.465.318.478.644.939.99 1.398.333.435 1.009-.061.67-.51-.334-.444-.65-.89-.957-1.353Zm2.553 3.259c-.38-.409-.992.17-.617.574.388.42.787.824 1.2 1.222.41.383.974-.233.577-.613l.003.003a28.965 28.965 0 0 1-1.163-1.186Z'
		/>
	</svg>
);
export default Streachable;
