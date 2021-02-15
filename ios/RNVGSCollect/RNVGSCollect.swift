import VGSCollectSDK

// Insert you <vauilt id here>
let vaultId = "tntrvi010le"

@objc(RNVGSCollect)
class RNVGSCollect: NSObject {

  // static var shared: RNVGSCollect? = nil

  static var collector = VGSCollect(id: vaultId, environment: Environment.sandbox)

  // override init() {
  //   super.init()

  //   RNVGSCollect.shared = self;
  // }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc
  func submitCardData(_ extraCardData: [String: Any], token: String, callback: @escaping RCTResponseSenderBlock) {
    var cardBrand = ""
    RNVGSCollect.collector.textFields.forEach { textField in
      if let cardState = textField.state as? CardState {
        cardBrand = cardState.cardBrand.stringValue
      }
    }

    var extraData = [String: Any]()
    extraData["cardBrand"] = cardBrand
    extraData["cardHolder"] = extraCardData["cardHolder"]

    RNVGSCollect.collector.customHeaders = [
      "Authorization": "Bearer \(token)"
    ]

    // send data
    DispatchQueue.main.async {
      RNVGSCollect.collector.sendData(path: "/users/current/debitCards", extraData: extraData) { (response) in

        switch response {

          case .success(_, let data, _):
            var jsonText = ""
            if let data = data, let jsonData = try? JSONSerialization.jsonObject(with: data, options: []) as? [String: Any] {
              jsonText = (String(data: try! JSONSerialization.data(withJSONObject: jsonData, options: .prettyPrinted), encoding: .utf8)!)
              print(jsonText)
            }
            callback([[
              "data": jsonText,
            ]])
            return

          case .failure(let code, _, _, let error):
            var errorText = ""
            switch code {
            case 400..<499:
              // Wrong request. This also can happend when your Routs not setup yet or your <vaultId> is wrong
              errorText = "Wrong Request Error: \(code)"
            case VGSErrorType.inputDataIsNotValid.rawValue:
              if let error = error as? VGSError {
                errorText = "Input data is not valid. Details:\n \(error)"
              }
            default:
              errorText = "Something went wrong. Code: \(code)"
            }
            print("Submit request error: \(code), \(String(describing: error))")
            callback([[
              "errorCode": code,
              "errorText": errorText,
            ]])
            return
        }
      }
    }
  }
}
