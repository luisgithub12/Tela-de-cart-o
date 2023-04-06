IMask(document.querySelector('#cc-cvv'), {
  mask: '0000'
})

IMask(document.querySelector('#cc-number'), {
  mask: '0000 0000 0000 0000'
})

IMask(document.querySelector('#cc-validity'), {
  mask: 'MM{/}YY',

  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12
    },
    YY: {
      mask: IMask.MaskedRange,
      from: String(new Date().getDateFullyear()).slice(2),
      to: String(new Date().getDateFullyear() + 10).slice(2)
    }
  }
})
