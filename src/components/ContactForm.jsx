

const ContactForm = () => {
    return (
        <div style={{textAlign: 'center', marginTop: '10px'}}>
            <form>
                <input type="text" placeholder="Name" />
                <br />
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <textarea name="" placeholder="Message" id=""></textarea>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ContactForm;