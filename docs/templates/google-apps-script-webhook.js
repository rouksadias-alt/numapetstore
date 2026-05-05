const SECRET = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
const ORDERS_SHEET = "Orders";
const EVENTS_SHEET = "Events";

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || "{}");

    if (!SECRET || body.secret !== SECRET) {
      return jsonResponse({ ok: false, error: "unauthorized" }, 401);
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    if (body.type === "order") {
      appendOrder(spreadsheet, body);
      return jsonResponse({ ok: true, type: "order" }, 200);
    }

    if (body.type === "event") {
      appendEvent(spreadsheet, body);
      return jsonResponse({ ok: true, type: "event" }, 200);
    }

    return jsonResponse({ ok: false, error: "unknown_type" }, 400);
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) }, 500);
  }
}

function appendOrder(spreadsheet, body) {
  const sheet = getOrCreateSheet(spreadsheet, ORDERS_SHEET);
  const order = body.order || {};
  const tracking = body.tracking || {};

  sheet.appendRow([
    order.order_id || "",
    order.order_number || "",
    order.status || "",
    order.created_at || new Date().toISOString(),
    order.customer_name || "",
    order.phone_raw || "",
    order.phone_e164 || "",
    order.country || "PA",
    order.currency || "USD",
    order.subtotal || "",
    order.discount_total || "",
    order.shipping_total || "",
    order.total || "",
    order.payment_method || "COD",
    JSON.stringify(body.items || []),
    JSON.stringify(body.upsells || []),
    tracking.source || "",
    tracking.landing_page || "",
    tracking.referrer || "",
    tracking.utm_source || "",
    tracking.utm_medium || "",
    tracking.utm_campaign || "",
    tracking.utm_content || "",
    tracking.utm_term || "",
    tracking.fbp || "",
    tracking.fbc || "",
    tracking.ttp || "",
    tracking.ttclid || "",
    tracking.scid || "",
    tracking.snap_click_id || "",
    tracking.event_id || "",
    tracking.ip_address || "",
    tracking.user_agent || "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
}

function appendEvent(spreadsheet, body) {
  const sheet = getOrCreateSheet(spreadsheet, EVENTS_SHEET);
  const event = body.event || {};

  sheet.appendRow([
    event.event_id || "",
    event.order_id || "",
    event.event_name || "",
    event.provider || "",
    event.success || false,
    event.status_code || "",
    event.created_at || new Date().toISOString(),
    event.value || "",
    event.currency || "USD",
    event.product_slug || "",
    event.url || "",
    event.utm_source || "",
    event.utm_medium || "",
    event.utm_campaign || "",
    event.response_text || "",
  ]);
}

function getOrCreateSheet(spreadsheet, name) {
  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
}

function jsonResponse(payload, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify({ ...payload, statusCode }))
    .setMimeType(ContentService.MimeType.JSON);
}
