import { Card, Header } from '../components/common'
import { Input } from '../components/ui'
import { ImageButton } from '../features/ImageButton'

const data = [
  {
    id: '1',
    imgUrl:
      'https://images.unsplash.com/photo-1650709244912-70afe4958f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'おすすめ',
  },
  {
    id: '2',
    imgUrl:
      'https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: 'SNS',
  },
  {
    id: '3',
    imgUrl:
      'https://images.unsplash.com/photo-1650700141402-972df21ec7b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
    description: '印刷',
  },
  {
    id: '4',
    imgUrl:
      'https://images.unsplash.com/photo-1650651129774-72f8250e4393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    description: '動画',
  },
]

function HomePage(): JSX.Element {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <article>
          <section>
            <div className="bg-gradient-to-r from-blue-700 to-blue-300">
              <div className="px-4 py-4">
                <h2 className="text-center text-2xl font-semibold text-white">
                  何をデザインしますか？
                </h2>
                <form className="mt-4">
                  <Input type="text" placeholder="あらゆるものを検索" />
                </form>
              </div>

              <div className="flex flex-row gap-x-2 overflow-x-scroll bg-white">
                {data.length ? (
                  data.map((item) => {
                    return (
                      <ImageButton
                        key={item.id}
                        imgUrl={item.imgUrl}
                        description={item.description}
                      />
                    )
                  })
                ) : (
                  <p>アイテムがありません</p>
                )}
              </div>
            </div>
          </section>
        </article>

        <div className="space-y-20 py-4">
          <Card
            as="article"
            title="早速アイデアを形に"
            imgUrl="https://images.unsplash.com/photo-1650476511106-4e4124365280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            description="誰よりも素早く、迅速に対応することで、クライアントから着実な信用を得ることができます。"
            buttonLabel="デザインをはじめる"
          />
          <Card
            as="article"
            title="簡単に共同自信を持って公開する作業"
            imgUrl="https://images.unsplash.com/photo-1650724399742-a4cbeccb24de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            description="誰よりも素早く、迅速に対応することで、クライアントから着実な信用を得ることができます。"
            buttonLabel="共同ではじめる"
          />
          <Card
            as="article"
            title="自信を持って公開"
            imgUrl="https://images.unsplash.com/photo-1650667225145-acbf0ee774d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
            description="誰よりも素早く、迅速に対応することで、クライアントから着実な信用を得ることができます。"
            buttonLabel="デザインを公開"
          />
        </div>
      </main>
    </div>
  )
}
export default HomePage
