

// Import components 
import Button from "../ui-elements/Button"

const Cta = () => {

  return (
    <section className='mt-[120px] mb-[120px]' id='final-cta'>
      <div className='landing__container'>
        <div className='flex flex-col items-center gap-[15px]'>
          <h2 className='text-[55px] font-semibold text-foreground text-center'>Start managing your money smarter — today.</h2>
          <Button
            text='Get started for FREE'
            className="w-[250px]"
          />
          <span className='text-center block text-[14px] text-muted-foreground'>Free forever · No ads · AI-powered insights</span>
        </div>
      </div>
    </section>
  )
}

export default Cta