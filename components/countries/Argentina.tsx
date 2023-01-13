import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Argentina:React.FC = () => {

  const { argentinaColor } = useContext(ColorContext)
  const { argentinaDiff } = useContext(DiffContext)

return (
<g className={'argentina'}>
  <style jsx>{`
  .argentina {
  fill: ${argentinaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ar" x="0" y="0" width="1" height="1" viewBox="0 90 52 52">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(argentinaDiff == 1) ?
<>
<path fill="url(#ar)" d="M 669.1 851.7 666.1 851.5 661.1 851.5 655.1 837.9 658.2 840.7 662.5 845.3 670.3 849 677.6 850.5 676.8 853.5 672.4 853.8 669.1 851.7 Z" stroke="black"/>
<path fill="url(#ar)" d="M 638.6 644.7 649.9 655.1 654.5 656.1 661.8 660.9 667.7 663.4 668.8 666.2 664.6 676 670.4 677.7 676.7 678.7 680.9 677.7 685.2 672.7 685.5 667.1 688.1 665.8 691.3 669.6 691.7 674.7 687.5 678.2 684.2 680.8 678.9 687.1 672.9 695.8 672.4 701 672 707.6 673.2 714 672.3 715.4 672.7 719.5 673 722.9 680.8 728.4 681 732.8 684.9 735.6 685.2 738.7 681.9 746.9 674.9 750.4 664.7 751.7 658.7 751 660.8 754.9 660.9 759.6 662.7 762.8 660.2 765.1 655.1 766 649.5 763.6 648 765.3 650.5 771.6 654.5 773.5 656.8 771.5 659.3 774.8 655.1 776.8 652.2 780.8 653.4 787.1 653.3 790.5 648.5 790.5 645.5 793.7 645.6 798.5 652.1 803.1 657.3 804.3 657.5 810 652.9 813.5 652.3 820.8 648.8 823.2 647.9 826.1 652.1 832.6 656.7 836.1 654.6 835.8 649.7 834.8 637.6 834 634.1 830.4 632.2 825.8 629.1 826.2 626.5 823.9 623.4 817.4 626.1 814.6 626.2 810.7 624.4 807.5 625.1 802.1 624 793.8 622.2 790.1 624 788.9 622.6 786.5 619.8 785.3 620.6 782.6 617.5 780.2 613.8 772.9 615.5 771.6 612.2 763.8 611.4 757.3 611.2 751.6 613.7 749.3 610.4 743 608.8 737.2 611.8 733 610.4 727.6 612 721.4 610.6 715.5 609 714.3 604.1 703.2 606.2 696.6 604.5 690.4 605.4 684.5 608 678.5 611.3 674.5 609.3 672 610.1 669.9 608.5 659.2 614.1 656.1 615.3 649.4 614.4 647.8 618.4 642 625.9 643.6 629.6 648.2 631.2 643 637.6 643.3 638.6 644.7 Z" stroke="black"/>
</>
:
<>
<path d="M 669.1 851.7 666.1 851.5 661.1 851.5 655.1 837.9 658.2 840.7 662.5 845.3 670.3 849 677.6 850.5 676.8 853.5 672.4 853.8 669.1 851.7 Z" stroke="black"/>
<path d="M 638.6 644.7 649.9 655.1 654.5 656.1 661.8 660.9 667.7 663.4 668.8 666.2 664.6 676 670.4 677.7 676.7 678.7 680.9 677.7 685.2 672.7 685.5 667.1 688.1 665.8 691.3 669.6 691.7 674.7 687.5 678.2 684.2 680.8 678.9 687.1 672.9 695.8 672.4 701 672 707.6 673.2 714 672.3 715.4 672.7 719.5 673 722.9 680.8 728.4 681 732.8 684.9 735.6 685.2 738.7 681.9 746.9 674.9 750.4 664.7 751.7 658.7 751 660.8 754.9 660.9 759.6 662.7 762.8 660.2 765.1 655.1 766 649.5 763.6 648 765.3 650.5 771.6 654.5 773.5 656.8 771.5 659.3 774.8 655.1 776.8 652.2 780.8 653.4 787.1 653.3 790.5 648.5 790.5 645.5 793.7 645.6 798.5 652.1 803.1 657.3 804.3 657.5 810 652.9 813.5 652.3 820.8 648.8 823.2 647.9 826.1 652.1 832.6 656.7 836.1 654.6 835.8 649.7 834.8 637.6 834 634.1 830.4 632.2 825.8 629.1 826.2 626.5 823.9 623.4 817.4 626.1 814.6 626.2 810.7 624.4 807.5 625.1 802.1 624 793.8 622.2 790.1 624 788.9 622.6 786.5 619.8 785.3 620.6 782.6 617.5 780.2 613.8 772.9 615.5 771.6 612.2 763.8 611.4 757.3 611.2 751.6 613.7 749.3 610.4 743 608.8 737.2 611.8 733 610.4 727.6 612 721.4 610.6 715.5 609 714.3 604.1 703.2 606.2 696.6 604.5 690.4 605.4 684.5 608 678.5 611.3 674.5 609.3 672 610.1 669.9 608.5 659.2 614.1 656.1 615.3 649.4 614.4 647.8 618.4 642 625.9 643.6 629.6 648.2 631.2 643 637.6 643.3 638.6 644.7 Z" stroke="black"/>
</>
}
</g>
)
}
  
export default Argentina