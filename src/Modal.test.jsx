import { Modal } from './Modal'
import { render } from '@testing-library/react'
import { React } from 'react'

test('scénario de test exemples', function(){
    render(<Modal title="hello world">
            <div id="demo"></div>
    </Modal>)
    const demo = document.querySelector('#demo')
    expect(demo).not.toBeNull()
    
})