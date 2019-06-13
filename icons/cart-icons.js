jQuery('body').append('<style>#icons{width:70%;height:100px;margin:0 auto;margin-bottom:20px;padding:10px 20px;color:#326fa8;font-size:.8em;background-color:transparent;border-top:2px solid #326fa8;border-bottom:2px solid #326fa8}.iconsWrapper{margin:0 auto;align-self:center;display:flex;flex-flow:row wrap;justify-content:space-between;position:relative}.wrap{margin:5px 5px;display:flex;flex-direction:column;justify-content:center;align-items:center}.circle{width:60px;height:60px;display:flex;justify-content:center;align-items:center;border:1px solid #326fa8;background-color:transparent;border-radius:50%}.info{width:50%;padding:5px 10px;position:absolute;left:200px;top:-150px;font-size:1em;background-color:#f8f8f8;box-shadow:2px 2px 5px #d1d1d1;display:none}#returnText,#freeShipping,#safePay,#happinessPolicy{margin-top:10px;color:#326fa8;font-weight:600;font-size:1.2em}.titleInfos{margin:0;margin-top:5px;margin-bottom:5px;font-size:1.2em}.little{font-size:.9em;font-style:italic}.wrapperShipping:hover .infoShipping{display:block;transition:display 1s}.wrapperReturns:hover .infoReturns{display:block}.wrapperPay:hover .infoPay{display:block}.wrapperHappy:hover .infoHappy{display:block}.wrap:hover .circle{width:60px;height:60px}.wrap img{transition:width .3s ease-in-out;z-index:-1}.wrap:hover img{width:45px;transition:width .3s ease-in-out}</style>');
jQuery('body').append('<div id="icons"><div class="iconsWrapper"><section class="wrap wrapperShipping"><div class="circle"><img src="../images/shipping.png" alt="icon of an origami plane" width="30" class="icon iconShip"></div><h5 id="freeShipping">free shipping</h5><article class="info infoShipping"><h6 class="titleInfos">Free shippping</h6><p>For regular shipping (5-7 business days), <br> the shipping is free !</p><p class="little">Only $7.99 for 2nd Day Air (2 days), and $9.99 for Next Day Air shipping (1 day)</p></article></section><section class="wrap wrapperReturns"><div class="circle"><img src="../images/returns.png" alt="icon of a return arrow" width="30" class="icon iconReturn"></div><h5 id="returnText">free returns</h5><article class="info infoReturns"><h6 class="titleInfos">Return policy</h6><p>If you dont love your new glasses or prescription sunglasses for any reason, <br> you can return them for a full refund or replace them within 30 days of the dispense date.</p><p class="little">Just make sure the eyewear is in original condition and undamaged.</p></article></section><section class="wrap wrapperPay"><div class="circle"><img src="../images/payment.png" alt="icon with a credit card" width="30" class="icon iconPay"></div><h5 id="safePay">safe pay</h5><article class="info infoPay"><h6 class="titleInfos">Safe payment</h6><p>We want to make your shopping here safe and easy.</p><p>We make sure that the payment process is safe, and you don’t experience problems when purchasing our products.</p></article></section><section class="wrap wrapperHappy"><div class="circle"><img src="../images/happy.png" alt="happy emoticon" width="30" class="icon iconHappy"></div><h5 id="happinessPolicy">happiness policy</h5><article class="info infoHappy"><h6 class="titleInfos">30 day guarantee</h6><p>100% satisfaction guaranteed. That’s our promise. <br>So, if youre not completely happy with your purchase within the first 30 days, just let us know. We’ll do whatever it takes to make it right*.</p><p class="little">*Applies to original purchases. Does not cover accidental damage, scratches, breakage or theft.</p></article></section></div></div>');