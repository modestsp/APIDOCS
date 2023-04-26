import gitHubIcon from '../assets/gitHubIcon.svg'

const Footer = () => {
  return (
    <footer>
      <div>
        {/* <Link href={'https://github.com/srsebbi'}> */}
        <img src={gitHubIcon} alt={'go to my personal github page'} width={20} height={20} />
        {/* <Image
          onClick={() => router.push('https://github.com/srsebbi')}
          src={gitHubIcon}
          alt={'go to my personal github page'}
          width={20}
          height={20}
          loader={imageLoader}
          unoptimized
          style={{ cursor: 'pointer' }} // ver esto  has a "loader" property that does not implement width.
          // Please implement it or use the "unoptimized" property instead.
        /> */}
        <span > Sebastián Perichón © 2023</span>
      </div>
    </footer>
  )
}

export default Footer;