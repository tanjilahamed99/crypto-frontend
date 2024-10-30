const Faq = () => {
  const data = [
    {
      question: "Why is Istimate-Pro Safe?",
      answer:
        "The functioning of Istimate-Pro is fully blockchain-protected. Participant leaves no personal data and has only his cryptocurrency wallet address connected via WEB 3.0 technology as a login. The entire Istimate-Pro infrastructure is built on the operation of tamper-proof smart contracts, and the website is simply a projection of data from the blockchain. It makes no sense to hack into the website.",
    },
    {
      question: "How do I Start?",
      answer:
        "Register on the website from connect DApp Wallet by only Referral link.",
    },
    {
      question: "How Can I Contact You?",
      answer:
        "Join Meta Pro Social Media Platforms & ask any questions or report problems or issues.",
    },
    {
      question: "How much does it cost to participate in Meta Pro USDT?",
      answer:
        "Participation in Meta Pro USDT is the self-activation of packages in two marketing programs. Activation costs start at 5 USDT, not including minimum fees from the BNB Smart Chain (BEP20 Blockchain) in the BNB cryptocurrency.",
    },
    {
      question: "Where will my profit come from?",
      answer:
        "All earnings to your wallet will only come from the activity of other members who open Program Packages. Meta Pro doesn't charge any additional fees.",
    },
  ];

  return (
    <div className="my-10 lg:w-[80%] w-[90%] mx-auto">
      <h2 className="text-primary text-2xl lg:text-3xl font-extrabold text-center md:mb-10 mb-5">
        Faq
      </h2>
      {data.map((item, index) => (
        <div
          key={index}
          tabIndex={0}
          className="collapse collapse-arrow border-b border-gray-500 rounded-none text-white mb-3"
        >
          <div className="collapse-title  font-semibold text-green-600 hover:text-primary">
            {item.question}
          </div>
          <div className="collapse-content">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
