import Razorpay from "razorpay";

// ✅ GET (testing)
export async function GET() {
  return new Response(
    JSON.stringify({ message: "API working ✅" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

// ✅ POST (create order)
export async function POST() {
  try {
    console.log("KEY ID:", process.env.RAZORPAY_KEY_ID);
    console.log("KEY SECRET:", process.env.RAZORPAY_KEY_SECRET);

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: 50000, // ₹500
      currency: "INR",
      receipt: `receipt_${Date.now()}`, // ✅ required
    });

    console.log("ORDER CREATED:", order);

    return new Response(JSON.stringify(order), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: any) {
    console.error("RAZORPAY ERROR:", error);

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}