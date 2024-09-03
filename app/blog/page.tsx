import ArticleCard from "@/components/blog/articleCard";
import { title } from "@/components/primitives";

interface Blog {
  title: string;
  slug: string;
  image: string;
}

export default function BlogPage() {
  const blogs: Blog[] = [
    {
      title: "Best Road Trips from Chicago to the West Coast in 2024",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJDllYTQzZTM1LTBkNTItNGE4ZS1iNjRkLTE5ZWI5MGVlNDU3Yw?s=1",
      image:
        "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
    },
    {
      title:
        "The Ultimate California Road Trip Guide: Top Places to Explore, Eat, and Stay",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJDk3ZTA0MzljLTYzMGYtNDJiNS1hYTNlLTMyZjI1ZjkwZTBjYw?s=1",
      image:
        "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
    },
    {
      title:
        "Road Trip from New York to California: The Most Amazing USA National Park Experience",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJGUzMGY2N2U1LTEwZTAtNGRkMS1iZTQ2LTMwMWRlMGViMWEyNQ?s=1",
      image:
        "https://st5.depositphotos.com/2576711/67771/i/1600/depositphotos_677712510-stock-photo-city-skyline-los-angeles-downtown.jpg",
    },
    {
      title: "Best Road Trip in Italy: Milan to Amalfi Coast",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJDAzY2ZjMzdmLWMzMGQtNDdhMy05YTBjLTczZDhlNzllNmMxZg?s=1",
      image:
        "https://st5.depositphotos.com/2576711/67771/i/1600/depositphotos_677712510-stock-photo-city-skyline-los-angeles-downtown.jpg",
    },
    {
      title:
        "3 Days Road Trip from Milan to Positano: An Italian Journey You’ll Never Forget",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJDQ4Mjg4M2VkLTZiMTItNGYxZS1hOTE0LTE0Mzg3YWU0MmVhOQ?s=1",
      image:
        "https://st5.depositphotos.com/2576711/67771/i/1600/depositphotos_677712510-stock-photo-city-skyline-los-angeles-downtown.jpg",
    },
    {
      title:
        "3 Days Pokhara Tour from Kathmandu in 2024: Explore the Beauty of Nepal",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJDc2ODdkZjRmLTAyZTUtNDRjNC04NjI0LWJhZGJhMWE5NzhiMQ?s=1",
      image:
        "https://st5.depositphotos.com/2576711/67771/i/1600/depositphotos_677712510-stock-photo-city-skyline-los-angeles-downtown.jpg",
    },
    {
      title:
        "Planning a Memorable Road Trip from Vancouver to Quebec City: Tips, Routes, and More!",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJDU3YjE2OGY0LWE1MjEtNDU4Zi1iZGU2LWZiYzJiNzkxNDU5YQ?s=1",
      image:
        "https://st5.depositphotos.com/2576711/67771/i/1600/depositphotos_677712510-stock-photo-city-skyline-los-angeles-downtown.jpg",
    },
    {
      title:
        "Bangalore to Goa Road Trip: Explore Road Conditions and Scenic Routes!",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJGQzZjg3Y2VjLTY4NDEtNGQ4MC1iMWYwLWNlMWMyMjJhYzdhNA?s=1",
      image:
        "https://st5.depositphotos.com/2576711/67771/i/1600/depositphotos_677712510-stock-photo-city-skyline-los-angeles-downtown.jpg",
    },
    {
      title: "The Ultimate 4-Day Road Trip from Las Vegas to Grand Junction",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJGE1YTAxZTQ4LWU5Y2EtNGNjZi05NDlhLTE4MDZjYzA0OWE5YQ?s=1",
      image:
        "https://st5.depositphotos.com/2576711/67771/i/1600/depositphotos_677712510-stock-photo-city-skyline-los-angeles-downtown.jpg",
    },
    {
      title: "The Ultimate Road Trip: From Las Vegas, NV to Beaver Falls, AZ",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJDBlYjFkYWIxLTBmYTQtNDMwNS1iODIyLThjNDM4MjAzNjBmNQ?s=1",
      image:
        "https://st5.depositphotos.com/2576711/67771/i/1600/depositphotos_677712510-stock-photo-city-skyline-los-angeles-downtown.jpg",
    },
    {
      title: "The Ultimate Italy Road Trip Itinerary for Your 2024 Bucket List",
      slug: "https://app.napkin.ai/page/CgoiCHByb2Qtb25lEiwKBFBhZ2UaJDNiMDZhNzUyLTU5NzktNDAzYi05Nzk5LWU1YjZmZjFmYzBiMw?s=1",
      image:
        "https://st5.depositphotos.com/2576711/67771/i/1600/depositphotos_677712510-stock-photo-city-skyline-los-angeles-downtown.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {blogs.map((item, index) => (
        <ArticleCard
          slug={item.slug}
          title={item.title}
          key={index}
          image={item.image}
        />
      ))}
    </div>
  );
}
